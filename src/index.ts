import { EmailAddressResolver, UUIDResolver } from "graphql-scalars"

import { Campus, ClassificationType, Institution, Library, Location, ServicePoint, FeeFine, LoanPolicy } from "./schema.js"
import TypeAPI from "./type-api.js"

// Resolvers define how to fetch the types defined in your schema.
export const resolvers = {
  Query: {
    patron(parent, args, { dataSources }, info) {
      return dataSources.patrons.getPatron(args.id)
    },
    instance(parent, args, { dataSources }, info) {
      return dataSources.instances.getInstance(args.id)
    },
    instances(parent, args, { dataSources }, info) {
      return dataSources.instances.getInstances(args)
    },
    holdingsRecord(parent, args, { dataSources }, info) {
      return dataSources.holdings.getHoldingsRecord(args.id)
    },
    holdingsRecords(parent, args, { dataSources }, info) {
      return dataSources.holdings.getHoldingsRecords(args)
    },
    item(parent, args, { dataSources }, info) {
      return dataSources.items.getItem(args.id)
    },
    items(parent, args, { dataSources }, info) {
      return dataSources.items.getItems(args)
    }
  },
  Patron: {
    user(parent, args, { dataSources }, info) {
      return dataSources.users.getUser(parent.id)
    },
  },
  Hold: {
    pickupLocation(parent, args, { dataSources }, info) {
      return dataSources.locations.getLocation(parent.pickupLocationId)
    }
  },
  Loan: {
    details(parent, args, { dataSources }, info) {
      return dataSources.circulation.getLoan(parent.id)
    }
  },
  CirculationLoan: {
    item(parent, args, { dataSources }, info) {
      return dataSources.items.getItem(parent.itemId)
    },
    itemEffectiveLocationAtCheckOut(parent, args, { dataSources, typeCache }: Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any }>, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.itemEffectiveLocationIdAtCheckOut))
    },
    loanPolicy(parent, args, { dataSources, typeCache }: Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any }>, info) {
      return dataSources.types.getMapFor<LoanPolicy>("loan-policy-storage/loan-policies", { key: 'loanPolicies', cache: typeCache }).then(map => map.get(parent.loanPolicyId))
    }
  },
  RequestItem: {
    instance(parent, args, { dataSources }, info) {
      return dataSources.instances.getInstance(parent.instanceId)
    },
    item(parent, args, { dataSources }, info) {
      return dataSources.items.getItem(parent.itemId)
    }
  },
  Instance: {
    holdingsRecords(parent, args, { dataSources }, info) {
      return dataSources.holdings.getByInstanceId(parent.id, args)
    },
    items(parent, args, { dataSources }, info) {
      return dataSources.items.getByInstanceId(parent.id, args)
    }
  },
  HoldingsRecord: {
    items(parent, args, { dataSources }, info) {
      return dataSources.items.getByHoldingsRecordId(parent.id, args)
    },
    instance(parent, args, { dataSources }, info) {
      return dataSources.instances.getInstance(parent.instanceId)
    },
    permanentLocation(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.permanentLocationId))
    },
    temporaryLocation(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.temporaryLocationId))
    },
    effectiveLocation(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.effectiveLocationId))
    }
  },
  Item: {
    holdingsRecord(parent, args, { dataSources }, info) {
      return dataSources.holdings.getHoldingsRecord(parent.holdingsRecordId)
    },
    instance(parent, args, { dataSources }, info) {
      return dataSources.instances.getByHoldingsRecordId(parent.holdingsRecordId)
    },
    permanentLocation(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.permanentLocationId))
    },
    temporaryLocation(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.temporaryLocationId))
    },
    effectiveLocation(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.effectiveLocationId))
    }
  },
  Classification: {
    classificationType(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<ClassificationType>("classification-types", { cache: typeCache }).then(map => map.get(parent.classificationTypeId))
    }
  },
  Location: {
    institution(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<Institution>("location-units/institutions", { key: "locinsts", cache: typeCache }).then(map => map.get(parent.institutionId))
    },
    campus(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<Campus>("location-units/campuses", { key: "loccamps", cache: typeCache }).then(map => map.get(parent.campusId))
    },
    library(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<Library>("location-units/libraries", { key: "loclibs", cache: typeCache }).then(map => map.get(parent.libraryId))
    },
    primaryServicePointObject(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<ServicePoint>("service-points", { key: "servicepoints", cache: typeCache }).then(map => map.get(parent.primaryServicePoint))
    },
    servicePoints(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getValuesFor<ServicePoint>("service-points", { key: "servicepoints", cache: typeCache }).then(arr => arr.filter(sp => parent.servicePointIds.includes(sp.id)))
    }
  },
  Campus: {
    institution(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<Institution>("location-units/institutions", { key: "locinsts", cache: typeCache }).then(map => map.get(parent.institutionId))
    }
  },
  Library: {
    campus(parent, args, { dataSources, typeCache } : Partial<{ dataSources: Partial<{ types: TypeAPI }>, typeCache: any}>, info) {
      return dataSources.types.getMapFor<Campus>("location-units/campuses", { key: "loccamps", cache: typeCache }).then(map => map.get(parent.campusId))
    }
  },
  Charge: {
    feeFine(parent, args, { dataSources }, info) {
      return dataSources.feefines.getFeeFine(parent.feeFineId)
    }
  },
  UUID: UUIDResolver,
  EmailAddress: EmailAddressResolver
}
