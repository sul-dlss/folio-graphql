import { EmailAddressResolver, UUIDResolver } from "graphql-scalars"

import PatronsAPI from "./patrons-api.js"
import UsersAPI from "./users-api.js"
import LocationsAPI from "./locations-api.js"
import InstancesAPI from "./instances-api.js"
import ItemsAPI from "./items-api.js"
import HoldingsAPI from "./holdings-api.js"
import TypeAPI from "./type-api.js"
import FeeFinesAPI from "./feefines-api.js"
import { Campus, ClassificationType, Institution, Library, Location, ServicePoint, FeeFine } from "./schema.js"

const patrons = new PatronsAPI()
const users = new UsersAPI()
const locations = new LocationsAPI()
const instances = new InstancesAPI()
const items = new ItemsAPI()
const holdings = new HoldingsAPI()
const types = new TypeAPI()
const feefines = new FeeFinesAPI()

// Resolvers define how to fetch the types defined in your schema.
export const resolvers = {
  Query: {
    patron(parent, args, context, info) {
      return patrons.getPatron(args.id)
    },
    instance(parent, args, context, info) {
      return instances.getInstance(args.id)
    },
    instances(parent, args, context, info) {
      return instances.getInstances(args)
    },
    holdingsRecord(parent, args, context, info) {
      return holdings.getHoldingsRecord(args.id)
    },
    holdingsRecords(parent, args, context, info) {
      return holdings.getHoldingsRecords(args)
    },
    item(parent, args, context, info) {
      return items.getItem(args.id)
    },
    items(parent, args, context, info) {
      return items.getItems(args)
    }
  },
  Patron: {
    user(parent, args, context, info) {
      return users.getUser(parent.id)
    },
  },
  Hold: {
    pickupLocation(parent, args, context, info) {
      return locations.getLocation(parent.pickupLocationId)
    }
  },
  RequestItem: {
    instance(parent, args, context, info) {
      return instances.getInstance(parent.instanceId)
    },
    item(parent, args, context, info) {
      return items.getItem(parent.itemId)
    }
  },
  Instance: {
    holdingsRecords(parent, args, context, info) {
      return holdings.getByInstanceId(parent.id, args)
    },
    items(parent, args, context, info) {
      return items.getByInstanceId(parent.id, args)
    }
  },
  HoldingsRecord: {
    items(parent, args, context, info) {
      return items.getByHoldingsRecordId(parent.id, args)
    },
    instance(parent, args, context, info) {
      return instances.getInstance(parent.instanceId)
    },
    permanentLocation(parent, args, context, info) {
      return types.getMapFor<Location>("locations", { cache: context.typeCache }).then(map => map.get(parent.permanentLocationId))
    },
    temporaryLocation(parent, args, context, info) {
      return types.getMapFor<Location>("locations", { cache: context.typeCache }).then(map => map.get(parent.temporaryLocationId))
    },
    effectiveLocation(parent, args, context, info) {
      return types.getMapFor<Location>("locations", { cache: context.typeCache }).then(map => map.get(parent.effectiveLocationId))
    }
  },
  Item: {
    holdingsRecord(parent, args, context, info) {
      return holdings.getHoldingsRecord(parent.holdingsRecordId)
    },
    instance(parent, args, context, info) {
      return instances.getByHoldingsRecordId(parent.holdingsRecordId)
    },
    permanentLocation(parent, args, context, info) {
      return types.getMapFor<Location>("locations", { cache: context.typeCache }).then(map => map.get(parent.permanentLocationId))
    },
    temporaryLocation(parent, args, context, info) {
      return types.getMapFor<Location>("locations", { cache: context.typeCache }).then(map => map.get(parent.temporaryLocationId))
    },
    effectiveLocation(parent, args, context, info) {
      return types.getMapFor<Location>("locations", { cache: context.typeCache }).then(map => map.get(parent.effectiveLocationId))
    }
  },
  Classification: {
    classificationType(parent, args, context, info) {
      return types.getMapFor<ClassificationType>("classification-types", { cache: context.typeCache }).then(map => map.get(parent.classificationTypeId))
    }
  },
  Location: {
    institution(parent, args, context, info) {
      return types.getMapFor<Institution>("location-units/institutions", { key: "locinsts", cache: context.typeCache }).then(map => map.get(parent.institutionId))
    },
    campus(parent, args, context, info) {
      return types.getMapFor<Campus>("location-units/campuses", { key: "loccamps", cache: context.typeCache }).then(map => map.get(parent.campusId))
    },
    library(parent, args, context, info) {
      return types.getMapFor<Library>("location-units/libraries", { key: "loclibs", cache: context.typeCache }).then(map => map.get(parent.libraryId))
    },
    primaryServicePointObject(parent, args, context, info) {
      return types.getMapFor<ServicePoint>("service-points", { key: "servicepoints", cache: context.typeCache }).then(map => map.get(parent.primaryServicePoint))
    },
    servicePoints(parent, args, context, info) {
      return types.getValuesFor<ServicePoint>("service-points", { key: "servicepoints", cache: context.typeCache }).then(arr => arr.filter(sp => parent.servicePointIds.includes(sp.id)))
    }
  },
  Campus: {
    institution(parent, args, context, info) {
      return types.getMapFor<Institution>("location-units/institutions", { key: "locinsts", cache: context.typeCache }).then(map => map.get(parent.institutionId))
    }
  },
  Library: {
    campus(parent, args, context, info) {
      return types.getMapFor<Campus>("location-units/campuses", { key: "loccamps", cache: context.typeCache }).then(map => map.get(parent.campusId))
    }
  },
  Charge: {
    feeFine(parent, args, context, info) {
      return feefines.getFeeFine(parent.feeFineId)
    }
  },
  UUID: UUIDResolver,
  EmailAddress: EmailAddressResolver
}