import { newContext, convert } from '@lifeomic/json-schema-to-graphql-types/src/converter.js'
import { GraphQLSchema, GraphQLEnumType, GraphQLObjectType, printSchema, GraphQLScalarType } from 'graphql';

import path from 'path';
import File from 'fs';
import { glob } from 'glob';
import camelCase from 'camelcase';

// Usage: $ generate-graphql-from-json-schemas.js /path/to/folio/root
const folioRoot = process.argv[process.argv.length - 1];
const folioFiles = await glob([folioRoot + 'raml/**/*.schema', folioRoot + 'raml/**/*.json', folioRoot + 'mod-*/ramls/**/*.json', folioRoot + 'mod-*/ramls/**/*.schema', folioRoot + 'acq-models/**/*.json']);

const context = newContext();
context.types.set('/uuid.schema.json', new GraphQLScalarType({ name: 'UUID', description: 'A UUID' }))
context.types.set('/date-time', new GraphQLScalarType({ name: 'DateTime', description: 'A date and time' }))


// We believe these models are the same (or at least substantially so), and we want to use
// the most authoritative version.
const refAliases = {
  '/mod-feesfines/ramls/servicepoint.json': '/mod-inventory-storage/ramls/servicepoint.json',
  '/mod-circulation/ramls/service-point.json': '/mod-inventory-storage/ramls/servicepoint.json',
  '/mod-circulation/ramls/actual-cost-record.json': '/mod-feesfines/ramls/actual-cost-record.json',
  '/mod-feesfines/ramls/usergroup.json': '/mod-users/ramls/usergroup.json',
  '/mod-feesfines/ramls/user.json': '/mod-users/ramls/user.json',
  '/mod-patron-blocks/ramls/loan.json': '/mod-feesfines/ramls/loan.json',
  '/mod-circulation-storage/ramls/time-period.json': '/mod-inventory-storage/ramls/time-period.json',
  '/mod-courses/ramls/time-period.json': '/mod-inventory-storage/ramls/time-period.json',
  '/mod-feesfines/ramls/time-period.json': '/mod-inventory-storage/ramls/time-period.json',
  '/mod-feesfines/ramls/period.json': '/mod-circulation-storage/ramls/period.json',
  '/mod-feesfines/ramls/loan-policy.json': '/mod-circulation-storage/ramls/loan-policy.json',
  '/mod-patron-blocks/ramls/period.json': '/mod-circulation-storage/ramls/period.json',
  '/mod-patron-blocks/ramls/user.json': '/mod-user/ramls/userdata.json'
}

const refRename = {
  '/acq-models/mod-orders-storage/schemas/location.json': '/acq-models/mod-orders-storage/schemas/order_location.schema.json',
}

// Futz with the $ref values to make them point at each other appropriately
function normalizeRef(file, str) {
  // If it's already a full path, we're probably good
  if (str.startsWith('/')) return str;

  // UUIDs are funny and are referenced in different ways.
  if (str.includes('uuid.')) return '/uuid.schema.json'
  if (str.includes('product_id_type.')) return '/uuid.schema.json'

  // each project has their own copy of raml-util and references it in different ways; we normalize that here
  // to use the same path for all of them
  if (str.includes('raml/')) return str.replace(/.*\/?raml\//, '/raml/').replace('.schema', '.schema.json');
  if (str.includes('raml-util/')) return str.replace(/.*\/?raml-util\//, '/raml/').replace('.schema', '.schema.json');

  // normalize the ref path to be relative to the root of the schemas
  const p = path.normalize(path.dirname(file.replace(folioRoot, '/')) + '/' + str.replace('.schema', '.schema.json'));

  // it's possible we need to repoint the ref to a different file in another module
  return refAliases[p] || refRename[p] || p
}

function recurse(structure, action) {
  if (Array.isArray(structure)) {
    structure.forEach(item => recurse(item, action))
  } else if (typeof structure === 'object' && structure !== null) {
    action(structure);
    Object.values(structure).forEach(value => recurse(value, action))
  }
}

// FOLIO's usage of ref is all over the place, and some of it doesn't play nice with
// upstream JSON schema tooling.  This function tries to fix that.
function fixupStuff(file, json) {
  if (!json.properties) return;

  if (file.includes('/mod-circulation-storage/ramls/request-policy.json')) {
    json.properties.allowedServicePoints.properties.Page = { "type": "array", "items": { "type": "string" } }
    json.properties.allowedServicePoints.properties.Hold = { "type": "array", "items": { "type": "string" } }
    json.properties.allowedServicePoints.properties.Recall = { "type": "array", "items": { "type": "string" } }
  }

  if (file.includes('/mod-rtac/ramls/requests/request.json')) {
    json.properties.pickupServicePoint.type = 'object';
  }

  if (file.includes('/acq-models/mod-orders-storage/schemas/fund_distribution.json')) {
    json.properties.code = { "type": "string" }
  }

  if (file.includes('/acq-models/mod-orders-storage/schemas/vendor_detail.json')) {
    json.properties.referenceNumbers = { "type": "array", "items": { "type": "string" } }
  }

  // Loans has an internal definition of item, but we'd rather use the one from inventory
  if (file.includes('/mod-circulation/ramls/loan.json')) {
    json.properties.item = { "$ref": "/mod-inventory-storage/ramls/item.json" }
  }

  // Loans has an internal definition of a subset of loan policy, but we'd rather use the full definition
  if (file.includes('/mod-circulation/ramls/loan.json')) {
    json.properties.loanPolicy = { "$ref": "/mod-circulation-storage/ramls/loan-policy.json" }
  }
  
  if (file.includes('/mod-inventory-storage/ramls/item.json')) {
    json.properties.materialType['$ref'] = '/mod-inventory-storage/ramls/materialtype.json';
    json.properties.holdingsRecord2['$ref'] = '/mod-inventory-storage/ramls/holdings-storage/holdingsRecords.json';
    json.properties.status.properties.name = { "type": "string" }
  }

  if (file.includes('/mod-inventory-storage/ramls/locations/location.json')) {
    json.properties.library['folio:$ref'] = 'loclib.json';
  }

  if (file.includes('/mod-inventory-storage/ramls/instance.json')) {
    json.properties.identifiers.items.properties.identifierTypeObject['folio:$ref'] = 'identifiertype.json';
  }

  // move patronGroup to patronGroupId for consistency
  if (file.includes('/mod-users/ramls/userdata.json')) {
    json.properties.patronGroupId = json.properties.patronGroup;
    delete json.properties.patronGroup;
  }

  // untyped properties aren't valid json schema
  if (file.includes('resultInfo.schema')) {
    json.properties.facets.items.properties.facetValues.items.properties.value.type = 'object'
  }

  Object.keys(json.properties).forEach(key => {
    recurse(json.properties, value => { 
      if (value['folio:$ref'] && !value['$ref']) {
        const currentMod = file.replace(folioRoot, '').split('/')[0];
        const resolvedRef = folioFiles.find(f => f.includes(currentMod) && f.endsWith(value['folio:$ref']));
        const id = resolvedRef && mapPathToId(resolvedRef);
        value['$ref'] = refAliases[id] || id || value['folio:$ref'];
      }

      if (value['$ref']) {
        value['$ref'] = normalizeRef(file, value['$ref']);
      }

      if (value['$ref'] && value['$ref'].includes('parameters.schema.json')) {
        value.type = 'array';
        value.items = { 'type': 'object', 'properties': { 'key': { 'type': 'string' }, 'value': { 'type': 'string' }} };
        delete value['$ref'];
      }

      if (value.format == 'date-time') {
        value['$ref'] = '/date-time';
      }

      if (
        value.pattern == '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$' ||
        value.pattern == '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$'
      ) {
        value['$ref'] = '/uuid.schema.json';
      }

      if(value.source && !value.type) {
        value.type = value.source;
      }

      if (value['$ref'] && value['type'] == 'object') {
        delete value.type;
      }
    });
  });
}

function mapPathToId(file) {
  if (file.includes('raml-util')) {
    return file.replace(/.*\/raml-util\//, '/raml-util/').replace('.schema', '.schema.json')
  } else if (file.includes('raml/')) {
    return file.replace(/.*\/raml\//, '/raml/').replace('.schema', '.schema.json')
  } else if (file.includes('json-schemas/acq-models/mod-orders-storage/schemas/location.json')) {
    return '/acq-models/mod-orders-storage/schemas/order_location.schema.json';
  } else {
    return file.replace(folioRoot, '/').replace('.schema', '.schema.json')
  }
}

const enumPathMap = {
  '/mod-circulation-storage/ramls/request-type.json': 'RequestType',
  '/acq-models/mod-invoice-storage/schemas/event_action.json': 'InvoiceEventAction',
  '/acq-models/mod-orders-storage/schemas/event_action.json': 'OrderEventAction',
};

folioFiles.sort().map(file => {
  const f = File.readFileSync(file, 'utf8');
  const json = JSON.parse(f);

  
  // omitting because they aren't enum types
  if (json.type != 'string') return;
  if (!json.enum) return;
  const id = file.replace(folioRoot, '/');
  const name = enumPathMap[id] || json.javaName || (json.javaType && json.javaType.split('.').pop()) || camelCase(path.basename(file, '.json'), { pascalCase: true });

  context.types.set(id, new GraphQLEnumType({ name: name, values: json.enum.reduce((acc, val) => { acc[val.replace(/[ \/,\(\)-]/g, '')] = {}; return acc }, {}) }));
});

folioFiles.sort().map(file => {
  // exclude non-policy files, which are covered in mod-circulation just fine
  if (file.includes('mod-circulation-storage') && !(file.includes('-policy.json') || file.includes('schedule.json') || file.includes('period.json') || file.includes('interval.json'))) return;

  // omitting because they aren't valid json schema
  if (file.includes('example') || file.includes('codex/') || file.includes('codex-next/') || file.includes('ramls/schema/anonymize-loans-response.json') || file.includes('ramls/events') || file.includes('ramls/migration') || file.includes('actions/')) return;

  // omitting because we don't need them
  if (file.includes('dereferenced') || file.includes('ramls/inventory')) return;
  if (refAliases[file.replace(folioRoot, '/').replace('.schema', '.schema.json')]) return;

  if (file.includes('mod-feesfines/ramls/inventory/')) return;
  const f = File.readFileSync(file, 'utf8');

  var json;
  json = JSON.parse(f);

  // omitting because they aren't object types
  if (json.type != 'object') return;

  json['$id'] = mapPathToId(file);

  if (json.id) delete json['id'];

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
  'Illpolicy': 'IllPolicy',
  'Illpolicies': 'IllPolicies',
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
  'Feefineactiondata': 'FeeFineAction',
  'Proxyfor': 'ProxyFor',
  'Userdata': 'User',
  'Usergroup': 'PatronGroup',
  'Overduefinepolicy': 'OverdueFinePolicy',
  'Lostitemfeepolicy': 'LostItemFeePolicy',
  'Patronnoticepolicy': 'PatronNoticePolicy',
}

// GraphQL can't handle multiple types with the same name; if they
// were the same, we'd alias them way back in the beginning.  But
// these are different, so we give them some namespaces
const pathMap = {
  '/mod-patron/ramls/item.json': 'PatronItem',
  '/mod-patron/ramls/charge.json': 'PatronCharge',
  '/mod-patron/ramls/loan.json': 'PatronLoan',
  '/mod-feesfines/ramls/loan.json': 'FeesfinesLoan',
  '/mod-rtac/ramls/library/loclib.json': 'RtacLibrary',
  '/mod-rtac/ramls/material-type/materialtype.json': 'RtacMaterialType',
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
      const models = [
        'Patron',
        'User',
        'PatronGroup',
        'Institution',
        'Campus',
        'Location',
        'Instance',
        'InstanceNoteType',
        'InstanceStatus',
        'InstanceType',
        'ModeOfIssuance',
        'AlternativeTitleType',
        'ContributorType',
        'HoldingsRecord',
        'HoldingsType',
        'HoldingsRecordsSource',
        'BoundWithParts',
        'BoundWithPart',
        'Item',
        'ItemDamagedStatus',
        'LoanPolicy',
        'Request',
        'RequestPolicy',
        'Library',
        'Loan',
        'LoanType',
        'CallNumberType',
        'ElectronicAccessRelationship',
        'PatronGroup',
        'Block',
        'Account',
        'ManualBlock',
        'PatronBlockCondition',
        'PatronBlockLimit',
        'FeeFine',
        'FeeFineAction',
        'ProxyFor',
        'FixedDueDateSchedule',
        'OverdueFinePolicy',
        'LostItemFeePolicy',
        'PatronNoticePolicy',
        'PieceCollection',
        'Piece',
        'Titles',
        'Title',
        'PoLineCollection',
        'PoLine',
        'HoldingSummary',
        'HoldingSummaryCollection',
        'RtacHoldingsBatch',
        'IllPolicy',
        'ItemNoteType'
      ];

      if (models.includes(type.name)) {
        const n = type.name.charAt(0).toLowerCase() + type.name.slice(1);

        result[n] = { type };
      }
    }
    return result;
  }
});

const schema = new GraphQLSchema({ query: queryType, mutation: null });

// Do a little tweaking to make the outputed schema useful to us.
const printedSchema = printSchema(schema).replace(/^type Query {[^}]*}/m, '');

// write the printed schema to the schema.graphql file between the delimiters
const schemaFile = path.join(process.cwd(), 'src/schema.graphql');
const schemaContents = File.readFileSync(schemaFile, 'utf8');
const newSchemaContents = schemaContents.replace(
  /(# BEGIN AUTOGENERATED SCHEMA\n)([\s\S]*)(\n\s*# END AUTOGENERATED SCHEMA)/,
  `$1############################\n${printedSchema}\n############################$3`
);
File.writeFileSync(schemaFile, newSchemaContents, 'utf8');
