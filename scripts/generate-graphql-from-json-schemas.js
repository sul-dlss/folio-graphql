import { newContext, convert } from '@lifeomic/json-schema-to-graphql-types/src/converter.js'
import { GraphQLSchema, GraphQLEnumType, GraphQLObjectType, printSchema, GraphQLScalarType } from 'graphql';

import path from 'path';
import File from 'fs';
import { glob } from 'glob';

// Usage: $ generate-graphql-from-json-schemas.js /path/to/folio/root
const folioRoot = process.argv[process.argv.length - 1];

const context = newContext();

// We believe these models are the same (or at least substantially so), and we want to use
// the most authoritative version.
const refAliases = {
  '/mod-feesfines/ramls/servicepoint.json': '/mod-inventory-storage/ramls/servicepoint.json',
  '/mod-circulation/ramls/service-point.json': '/mod-inventory-storage/ramls/servicepoint.json',
  '/mod-circulation/ramls/actual-cost-record.json': '/mod-feesfines/ramls/actual-cost-record.json',
  '/mod-feesfines/ramls/usergroup.json': '/mod-users/ramls/usergroup.json',
  '/mod-feesfines/ramls/user.json': '/mod-users/ramls/user.json',
  '/mod-patron-blocks/ramls/loan.json': '/mod-feesfines/ramls/loan.json',
  '/mod-feesfines/ramls/time-period.json': '/mod-inventory-storage/ramls/time-period.json',
  '/mod-feesfines/ramls/period.json': '/mod-circulation-storage/ramls/period.json',
  '/mod-feesfines/ramls/loan-policy.json': '/mod-circulation-storage/ramls/loan-policy.json',
  '/mod-patron-blocks/ramls/period.json': '/mod-circulation-storage/ramls/period.json',
  '/mod-patron-blocks/ramls/user.json': '/mod-user/ramls/userdata.json',
}

// Futz with the $ref values to make them point at each other appropriately
function normalizeRef(file, str) {
  // If it's already a full path, we're probably good
  if (str.startsWith('/')) return str;

  // UUIDs are funny and are referenced in different ways.
  if (str.includes('uuid.')) return '/uuid.schema.json'

  // each project has their own copy of raml-util and references it in different ways; we normalize that here
  // to use the same path for all of them
  if (str.includes('raml-util')) return str.replace(/.*\/?raml-util\//, '/raml-util/').replace('.schema', '.schema.json');

  // normalize the ref path to be relative to the root of the schemas
  const p = path.dirname(file.replace(folioRoot, '/')) + '/' + str.replace('.schema', '.schema.json');

  // it's possible we need to repoint the ref to a different file in another module
  return refAliases[p] || p
}

// FOLIO's usage of ref is all over the place, and some of it doesn't play nice with
// upstream JSON schema tooling.  This function tries to fix that.
function fixupStuff(file, json) {
  if (!json.properties) return;

  Object.keys(json.properties).forEach(key => {
    if (json.properties[key].properties) fixupStuff(file, json.properties[key])

    if(json.properties[key].source && !json.properties[key].type) {
      json.properties[key].type = json.properties[key].source;
    }

    if (json.properties[key].format == 'date-time') {
      json.properties[key] = {
        'description': json.properties[key].description,
        '$ref': '/date-time'
      };
    }

    if (
      json.properties[key].pattern == '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$' ||
      json.properties[key].pattern == '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$'
    ) {
      json.properties[key] = { description: json.properties[key].description, '$ref': '/uuid.schema.json' };
    }

    if (json.properties[key]['folio:$ref']) {
      json.properties[key]['$ref'] = json.properties[key]['folio:$ref']
    }

    if (json.properties[key]['$ref']) {
      json.properties[key] = {
        'description': json.properties[key].description,
        '$ref': normalizeRef(file, json.properties[key]['$ref'])
      }
    }

    if (json.properties[key]['items']) {
      if (json.properties[key]['items']['properties']) fixupStuff(file, json.properties[key]['items'])

      if (!json.properties[key]['items'].type) {
        json.properties[key]['items'].type = 'object';
      }

      if (json.properties[key]['items']['$ref']) {
        json.properties[key]['items'] = {
          'description': json.properties[key].description,
          '$ref': normalizeRef(file, json.properties[key]['items']['$ref'])
        }
      }

      if (json.properties[key]['items']['$dynamicRef']) {
        json.properties[key]['items'] = {
          'description': json.properties[key].description,
          '$ref': normalizeRef(file, json.properties[key]['items']['$dynamicRef'])
        }
      }
    }

    if (json.properties[key]['$dynamicRef']) {
      json.properties[key] = {
        '$dynamicRef': normalizeRef(file, json.properties[key]['$dynamicRef'])
      }
    }
  });
}

context.types.set('/uuid.schema.json', new GraphQLScalarType({ name: 'UUID', description: 'A UUID' }))
context.types.set('/date-time', new GraphQLScalarType({ name: 'DateTime', description: 'A date and time' }))

context.types.set('/mod-circulation-storage/ramls/request-type.json', new GraphQLEnumType({ name: 'RequestType', values: { 'Hold': {}, 'Recall': {}, 'Page': {} } }))

const files = await glob([folioRoot + 'mod-*/ramls/**/*.json', folioRoot + 'mod-*/ramls/**/*.schema']);

files.sort().map(file => {
  // omitting because of a conflict with mod-circulation
  if (file.includes('mod-feesfines/ramls/loan.json')) return;

  // exclude non-policy files, which are covered in mod-circulation just fine
  if (file.includes('mod-circulation-storage') && !(file.includes('-policy.json') || file.includes('schedule.json') || file.includes('period.json') || file.includes('interval.json'))) return;

  // omitting because they aren't valid json schema
  if (file.includes('example') || file.includes('codex/') || file.includes('codex-next/') || file.includes('ramls/schema/anonymize-loans-response.json') || file.includes('ramls/events') || file.includes('ramls/migration') || file.includes('actions/')) return;

  // omitting because they aren't object types
  if (file.includes('uuid') || file.includes('parameters') || file.includes('tenant') || file.includes('error') || file.includes('CQL')) return;

  // omitting because we don't need them
  if (file.includes('dereferenced') || file.includes('ramls/inventory')) return;
  if (refAliases[file.replace(folioRoot, '/').replace('.schema', '.schema.json')]) return;

  const f = File.readFileSync(file, 'utf8');

  var json;
  json = JSON.parse(f);

  if (file.includes('raml-util')) {
    json['$id'] = file.replace(/.*\/raml-util\//, '/raml-util/').replace('.schema', '.schema.json')
  } else {
    json['$id'] = file.replace(folioRoot, '/').replace('.schema', '.schema.json')
  }
  delete json['id']

  // untyped properties aren't valid json schema
  if (file.includes('resultInfo')) {
    json.properties.facets.items.properties.facetValues.items.properties.value.type = 'object'
  }

  if (file.includes('/marc.json')) {
    json.properties.fields.items = { 'type': 'string' }
  }

  if (file.includes('/mod-circulation/ramls/request.json')) {
    json.properties.pickupServicePoint.type = 'object';
  }

  // move patronGroup to patronGroupId for consistency
  if (file.includes('/mod-users/ramls/userdata.json')) {
    json.properties.patronGroupId = json.properties.patronGroup;
    delete json.properties.patronGroup;
  }

  // permanentLocation should be typed as location
  if (file.includes('/mod-inventory-storage/ramls/item.json')) {
    json.properties.permanentLocation = { "$ref": "location.json" };
  }

  // can't be bothered to map so many different enum types
  if (file.includes('/mod-inventory-storage/ramls/item.json')) {
    json.properties.status.properties.name = { "type": "string" };
  }

  // library should be typed as library, not institution
  if (file.includes('/mod-inventory-storage/ramls/location.json')) {
    json.properties.library = { "$ref": "loclib.json" };
  }

  if (file.includes('/mod-inventory-storage/ramls/instance.json')) {
    json.properties.identifiers.items.properties.identifierTypeObject = { "$ref": "identifiertype.json" };
  }

  // Loans has an internal definition of item, but we'd rather use the one from inventory
  if (file.includes('/mod-circulation/ramls/loan.json')) {
    json.properties.item = { "$ref": "/mod-inventory-storage/ramls/item.json" }
  }

  // Loans has an internal definition of a subset of loan policy, but we'd rather use the full definition
  if (file.includes('/mod-circulation/ramls/loan.json')) {
    json.properties.loanPolicy = { "$ref": "/mod-circulation-storage/ramls/loan-policy.json" }
  }

  fixupStuff(file, json)

  convert(context, json)
})

// remap a bunch of names
const nameMap = {
  'Uuid': 'UUID',
  'Statisticalcodetypes': 'StatisticalCodeTypes',
  'Statisticalcodetype': 'StatisticalCodeType',
  'Statisticalcodes': 'StatisticalCodes',
  'Statisticalcode': 'StatisticalCode',
  'Shelflocations': 'ShelfLocations',
  'Shelflocation': 'ShelfLocation',
  'Servicepointsusers': 'ServicePointsUsers',
  'Servicepointsuser': 'ServicePointsUser',
  'Servicepoints': 'ServicePoints',
  'Servicepoint': 'ServicePoint',
  'Natureofcontentterms': 'NatureOfContentTerms',
  'Natureofcontentterm': 'NatureOfContentTerm',
  'Modeofissuance': 'ModeOfIssuance',
  'Materialtypes': 'MaterialTypes',
  'Materialtype': 'MaterialType',
  'Marc': 'MARC',
  'Loclibs': 'Libraries',
  'Loclib': 'Library',
  'Locinsts': 'Institutions',
  'Locinst': 'Institution',
  'Loccamps': 'Campuses',
  'Loccamp': 'Campus',
  'Loantypes': 'LoanTypes',
  'Loantype': 'LoanType',
  'Itemnotetypes': 'ItemNoteTypes',
  'Itemnotetype': 'ItemNoteType',
  'Itemdamagedstatuses': 'ItemDamagedStatuses',
  'Itemdamagedstatus': 'ItemDamagedStatus',
  'Issuancemodes': 'IssuanceModes',
  'Instancetypes': 'InstanceTypes',
  'Instancetype': 'InstanceType',
  'Instancestatuses': 'InstanceStatuses',
  'Instancestatus': 'InstanceStatus',
  'Instancerelationshiptypes': 'InstanceRelationshipTypes',
  'Instancerelationshiptype': 'InstanceRelationshipType',
  'Instancerelationships': 'InstanceRelationships',
  'Instancerelationship': 'InstanceRelationship',
  'Instanceprecedingsucceedingtitles': 'InstancePrecedingSucceedingTitles',
  'Instanceprecedingsucceedingtitle': 'InstancePrecedingSucceedingTitle',
  'Instancenotetypes': 'InstanceNoteTypes',
  'Instancenotetype': 'InstanceNoteType',
  'Instanceformats': 'InstanceFormats',
  'Instanceformat': 'InstanceFormat',
  'Illpolicy': 'ILLpolicy',
  'Illpolicies': 'ILLpolicies',
  'Identifiertypes': 'IdentifierTypes',
  'Identifiertype': 'IdentifierType',
  'Holdingstypes': 'HoldingsTypes',
  'Holdingstype': 'HoldingsType',
  'Holdingsrecordssources': 'HoldingsRecordsSources',
  'Holdingsrecordssource': 'HoldingsRecordsSource',
  'HoldingsrecordsPost': 'HoldingsRecordsPost',
  'Holdingsrecords': 'HoldingsRecords',
  'Holdingsrecord': 'HoldingsRecord',
  'Holdingsnotetypes': 'HoldingsNoteTypes',
  'Holdingsnotetype': 'HoldingsNoteType',
  'Electronicaccessrelationships': 'ElectronicAccessRelationships',
  'Electronicaccessrelationship': 'ElectronicAccessRelationship',
  'Contributortypes': 'ContributorTypes',
  'Contributortype': 'ContributorType',
  'Contributornametypes': 'ContributorNameTypes',
  'Contributornametype': 'ContributorNameType',
  'Classificationtypes': 'ClassificationTypes',
  'Classificationtype': 'ClassificationType',
  'Callnumbertypes': 'CallNumberTypes',
  'Callnumbertype': 'CallNumberType',
  'Authoritysourcefiles': 'AuthoritySourceFiles',
  'Authoritysourcefile': 'AuthoritySourceFile',
  'AuthoritysourcefilePatch': 'AuthoritySourcefilePatch',
  'Authoritynotetypes': 'AuthorityNoteTypes',
  'Authoritynotetype': 'AuthorityNoteType',
  'AnonymizeStorageLoansResponse': 'AnonymizeStorageLoansResponse',
  'AnonymizeStorageLoansRequest': 'AnonymizeStorageLoansRequest',
  'Alternativetitletypes': 'AlternativeTitleTypes',
  'Alternativetitletype': 'AlternativeTitleType',
  'Proxyfor': 'ProxyFor',
  'Waivedata': 'WaiveData',
  'WaivedataCollection': 'WaiveDataCollection',
  'Account': 'Patron',
  'Accountdata': 'Account',
  'AutomatedPatronBlock': 'Block',
  'Manualblockdata': 'ManualBlock',
  'Feefinedata': 'FeeFine',
  'Proxyfor': 'ProxyFor',
  'Userdata': 'User',
  'Usergroup': 'PatronGroup',
  'Overduefinepolicy': 'OverdueFinePolicy',
  'Lostitemfeepolicy': 'LostItemFeePolicy',
  'Patronnoticepolicy': 'PatronNoticePolicy'
}

// GraphQL can't handle multiple types with the same name; if they
// we the same, we'd alias them way back in the beginning.  But
// these are different, so we give them some namespaces
const pathMap = {
  '/mod-patron/ramls/item.json': 'PatronItem',
  '/mod-patron/ramls/charge.json': 'PatronCharge',
  '/mod-patron/ramls/loan.json': 'PatronLoan',
  '/mod-feesfines/ramls/loan.json': 'FeesfinesLoan'
}

for (const [path, type] of context.types.entries()) {
  if (pathMap[path]) {
    type.name = pathMap[path]
  } else {
    type.name = nameMap[type.name] || type.name
  }
}

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => {
    const result = {};
    for (const [path, type] of context.types.entries()) {

      // After all that work, we filter out models that we just don't need. These are the
      // "top level" models we care about, and the GraphQL implementation will figure out
      // their dependencies and drop the rest on the floor.
      if (['Patron', 'User', 'PatronGroup', 'Instance', 'InstanceNoteType', 'InstanceStatus', 'InstanceType', 'ModeOfIssuance', 'AlternativeTitleType', 'Authority', 'ContributorType', 'HoldingsRecord', 'HoldingsType', 'HoldingsRecordsSource', 'Item', 'ItemDamagedStatus', 'LoanPolicy', 'Request', 'RequestPolicy', 'Library', 'Loan', 'LoanType', 'CallNumberType', 'ElectronicAccessRelationship', 'PatronGroup', 'Block', 'Account', 'ManualBlock', 'PatronBlockCondition', 'PatronBlockLimit', 'FeeFine', 'ProxyFor', 'FixedDueDateSchedule', 'OverdueFinePolicy', 'LostItemFeePolicy', 'PatronNoticePolicy'].includes(type.name)) {
        const n = type.name.charAt(0).toLowerCase() + type.name.slice(1);

        result[n] = { type };
      }
    }
    return result;
  }
});

const schema = new GraphQLSchema({ query: queryType, mutation: null });

// Do a little tweaking to make the outputed schema useful to us.
console.log(printSchema(schema).replace(/^type Query {[^}]*}/m, ''))
