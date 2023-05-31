import { UUIDResolver } from "graphql-scalars"
import { Campus, ClassificationType, Institution, Library, Location, ServicePoint, LoanPolicy, RequestPolicy, PatronGroup, PatronBlockLimit, PatronBlockCondition, FixedDueDateSchedule, HoldStatus } from "../schema.js"
import { Resolvers } from '../resolvers-types'

/* eslint-disable @typescript-eslint/no-unused-vars */
// Resolvers define how to fetch the types defined in your schema.
export const resolvers: Resolvers = {
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
    },
    loanPolicies(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getValuesFor<LoanPolicy>("loan-policy-storage/loan-policies", { key: 'loanPolicies', cache: typeCache })
    },
    requestPolicies(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getValuesFor<RequestPolicy>("request-policy-storage/request-policies", { key: 'requestPolicies', cache: typeCache })
    },
    libraries(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getValuesFor<Library>("location-units/libraries", { key: "loclibs", cache: typeCache })
    },
    patronGroups(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getValuesFor<PatronGroup>("groups", { key: "usergroups", cache: typeCache })
    }
  },
  Patron: {
    user(parent, args, { dataSources }, info) {
      return dataSources.users.getUser(parent.id)
    },
    blocks(parent, args, { dataSources }, info) {
      return dataSources.users.getBlocks(parent.id)
    },
    manualBlocks(parent, args, { dataSources }, info) {
      return dataSources.users.getManualBlocks(parent.id)
    },
    accounts(parent, args, { dataSources }, info) {
      return dataSources.users.getAccounts(parent.id)
    }
  },
  Block: {
    blockCondition(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<PatronBlockCondition>("patron-block-conditions", { key: "patronBlockConditions", cache: typeCache }).then(map => map.get(parent.patronBlockConditionId));
    },
  },
  User: {
    patronGroupId(parent, args, { dataSources }, info) {
      return parent.patronGroup;
    },
    patronGroup(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<PatronGroup>("groups", { key: "usergroups", cache: typeCache }).then(map => map.get(parent.patronGroup as unknown as string));
    },
    blocks(parent, args, { dataSources }, info) {
      return dataSources.users.getBlocks(parent.id)
    },
    manualBlocks(parent, args, { dataSources }, info) {
      return dataSources.users.getManualBlocks(parent.id)
    },
    accounts(parent, args, { dataSources }, info) {
      return dataSources.users.getAccounts(parent.id)
    },
    proxiesFor(parent, args, { dataSources }, info) {
      return dataSources.users.getProxiesFor(parent.id)
    },
    proxiesOf(parent, args, { dataSources }, info) {
      return dataSources.users.getProxiesOf(parent.id)
    }
  },
  PatronGroup: {
    limits(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getValuesFor<PatronBlockLimit>("patron-block-limits", { key: "patronBlockLimits", cache: typeCache }).then(arr => arr.filter(l => l.patronGroupId == parent.id));
    }
  },
  PatronBlockLimit: {
    condition(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<PatronBlockCondition>("patron-block-conditions", { key: "patronBlockConditions", cache: typeCache }).then(map => map.get(parent.conditionId));
    }
  },
  ProxyFor: {
    user(parent, args, { dataSources }, info) {
      return dataSources.users.getUser(parent.userId)
    },
    proxyUser(parent, args, { dataSources }, info) {
      return dataSources.users.getUser(parent.proxyUserId)
    }
  },
  Hold: {
    pickupLocation(parent, args, { dataSources }, info) {
      return dataSources.locations.getLocation(parent.pickupLocationId)
    },
    status(parent, args, { dataSources, typeCache }, info) {
      switch(parent.status as unknown as string) {
        case "Open - Not yet filled": return HoldStatus.OpenNotYetFilled
        case "Open - Awaiting pickup": return HoldStatus.OpenAwaitingPickup
        case "Open - Awaiting delivery": return HoldStatus.OpenAwaitingDelivery
        case "Open - In transit": return HoldStatus.OpenInTransit
        case "Closed - Filled": return HoldStatus.ClosedFilled
        case "Closed - Cancelled": return HoldStatus.ClosedCancelled
        case "Closed - Unfilled": return HoldStatus.ClosedUnfilled
        case "Closed - Pickup expired": return HoldStatus.ClosedPickupExpired
      }
    }
  },
  PatronLoan: {
    details(parent, args, { dataSources }, info) {
      return dataSources.circulation.getLoan(parent.id)
    }
  },
  Loan: {
    item(parent, args, { dataSources }, info) {
      return dataSources.items.getItem(parent.itemId)
    },
    itemEffectiveLocationAtCheckOut(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.itemEffectiveLocationIdAtCheckOut))
    },
    loanPolicy(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<LoanPolicy>("loan-policy-storage/loan-policies", { key: 'loanPolicies', cache: typeCache }).then(map => map.get(parent.loanPolicyId))
    }
  },
  LoanPolicyLoansPolicy: {
    fixedDueDateSchedule(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<FixedDueDateSchedule>("fixed-due-date-schedule-storage/fixed-due-date-schedules", { key: 'fixedDueDateSchedules', cache: typeCache }).then(map => map.get(parent.fixedDueDateScheduleId))
    }
  },
  PatronItem: {
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
    permanentLocation(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.permanentLocationId))
    },
    temporaryLocation(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.temporaryLocationId))
    },
    effectiveLocation(parent, args, { dataSources, typeCache }, info) {
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
    permanentLocation(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.permanentLocationId))
    },
    temporaryLocation(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.temporaryLocationId))
    },
    effectiveLocation(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.effectiveLocationId))
    }
  },
  InstanceClassificationsItem: {
    classificationType(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<ClassificationType>("classification-types", { cache: typeCache }).then(map => map.get(parent.classificationTypeId))
    }
  },
  Location: {
    institution(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<Institution>("location-units/institutions", { key: "locinsts", cache: typeCache }).then(map => map.get(parent.institutionId))
    },
    campus(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<Campus>("location-units/campuses", { key: "loccamps", cache: typeCache }).then(map => map.get(parent.campusId))
    },
    library(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<Library>("location-units/libraries", { key: "loclibs", cache: typeCache }).then(map => map.get(parent.libraryId))
    },
    primaryServicePointObject(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<ServicePoint>("service-points", { key: "servicepoints", cache: typeCache }).then(map => map.get(parent.primaryServicePoint))
    },
    servicePoints(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getValuesFor<ServicePoint>("service-points", { key: "servicepoints", cache: typeCache }).then(arr => arr.filter(sp => parent.servicePointIds.includes(sp.id)))
    }
  },
  Campus: {
    institution(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<Institution>("location-units/institutions", { key: "locinsts", cache: typeCache }).then(map => map.get(parent.institutionId))
    }
  },
  Library: {
    campus(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getMapFor<Campus>("location-units/campuses", { key: "loccamps", cache: typeCache }).then(map => map.get(parent.campusId))
    },
    locations(parent, args, { dataSources, typeCache }, info) {
      return dataSources.types.getValuesFor<Location>("locations", { cache: typeCache }).then(values => values.filter(v => v.libraryId == parent.id))
    },
  },
  PatronCharge: {
    feeFine(parent, args, { dataSources }, info) {
      return dataSources.feefines.getFeeFine(parent.feeFineId)
    }
  },
  Account: {
    user(parent, args, { dataSources }, info) {
      return dataSources.users.getUser(parent.userId)
    },
    loan(parent, args, { dataSources }, info) {
      return dataSources.circulation.getLoan(parent.id)
    },
    item(parent, args, { dataSources }, info) {
      return dataSources.items.getItem(parent.itemId)
    },
    feeFine(parent, args, { dataSources }, info) {
      return dataSources.feefines.getFeeFine(parent.feeFineId)
    },
  },
  UUID: UUIDResolver
}
