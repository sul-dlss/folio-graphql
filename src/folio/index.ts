import { UUIDResolver } from "graphql-scalars"
import {
  Campus,
  ClassificationType,
  Institution,
  Library,
  Location,
  ServicePoint,
  LoanPolicy,
  RequestPolicy,
  OverdueFinePolicy,
  LostItemFeePolicy,
  PatronNoticePolicy,
  PatronGroup,
  PatronBlockLimit,
  PatronBlockCondition,
  FixedDueDateSchedule,
  HoldStatus,
  IdentifierType,
  InstanceNoteType,
  InstanceFormat,
  InstanceType,
  ItemDamagedStatus,
  LoanType,
  CallNumberType,
  HoldingsRecordsSource,
  IlLpolicy,
  ElectronicAccessRelationship,
  ModeOfIssuance,
  HoldingsType,
  AlternativeTitleType,
  ContributorType,
  MaterialType,
  ItemCirculationNotesItemNoteType,
  ItemNoteType,
} from "../schema.js"
import { Resolvers } from '../resolvers-types'

/* eslint-disable @typescript-eslint/no-unused-vars */
// Resolvers define how to fetch the types defined in your schema.
export const resolvers: Resolvers = {
  Query: {
    patron(parent, { id }, { dataSources: { patrons } }, info) {
      return patrons.getPatron(id)
    },
    feeFineTypes(parent, args, { dataSources: { feefines } }, info) {
      return feefines.getFeeFineTypes(args)
    },
    instance(parent, { id }, { dataSources: { instances } }, info) {
      return instances.getInstance(id)
    },
    instances(parent, args, { dataSources: { instances } }, info) {
      return instances.getInstances(args)
    },
    holdingsRecord(parent, { id }, { dataSources: { holdings } }, info) {
      return holdings.getHoldingsRecord(id)
    },
    holdingsRecords(parent, args, { dataSources: { holdings } }, info) {
      return holdings.getHoldingsRecords(args)
    },
    item(parent, { id }, { dataSources: { items } }, info) {
      return items.getItem(id)
    },
    items(parent, args, { dataSources: { items } }, info) {
      return items.getItems(args)
    },
    availability(parent, { id }, { dataSources: { rtac } }, info) {
      return rtac.getAvailability(id)
    },

    // circ rule policies
    loanPolicies(parent, args, { dataSources: { types } }, info) {
      return types.getValuesFor<LoanPolicy>("loan-policy-storage/loan-policies", { key: 'loanPolicies' })
    },
    requestPolicies(parent, args, { dataSources: { types } }, info) {
      return types.getValuesFor<RequestPolicy>("request-policy-storage/request-policies", { key: 'requestPolicies' })
    },
    overdueFinePolicies(parent, args, { dataSources: { types } }, info) {
      return types.getValuesFor<OverdueFinePolicy>("overdue-fines-policies", { key: 'overdueFinePolicies' })
    },
    lostItemFeesPolicies(parent, args, { dataSources: { types } }, info) {
      return types.getValuesFor<LostItemFeePolicy>("lost-item-fees-policies", { key: 'lostItemFeePolicies' })
    },
    patronNoticePolicies(parent, args, { dataSources: { types } }, info) {
      return types.getValuesFor<PatronNoticePolicy>("patron-notice-policy-storage/patron-notice-policies", { key: 'patronNoticePolicies' })
    },

    // circ rule criteria
    patronGroups(parent, args, { dataSources: { types } }, info) {
      return types.getValuesFor<PatronGroup>("groups", { key: "usergroups" })
    },
    materialTypes(parent, args, { dataSources: { types } }, info) {
      return types.getValuesFor<MaterialType>("material-types", { key: "mtypes" })
    },
    loanTypes(parent, args, { dataSources: { types } }, info) {
      return types.getValuesFor<LoanType>("loan-types", { key: "loantypes" })
    },
    institutions(parent, args, { dataSources: { types } }, info) {
      return types.getValuesFor<Institution>("location-units/institutions", { key: "locinsts" })
    },
    campuses(parent, args, { dataSources: { types } }, info) {
      return types.getValuesFor<Campus>("location-units/campuses", { key: "loccamps" })
    },
    async campus(parent, { code }, { dataSources: { types } }, info) {
      const campuses = await types.getValuesFor<Campus>("location-units/campuses", { key: "loccamps" });

      return campuses.find(campus => campus.code === code);
    },
    libraries(parent, args, { dataSources: { types } }, info) {
      return types.getValuesFor<Library>("location-units/libraries", { key: "loclibs" })
    },
    async library(parent, { code }, { dataSources: { types } }, info) {
      const libraries = await types.getValuesFor<Library>("location-units/libraries", { key: "loclibs" });

      return libraries.find(library => library.code === code);
    },
    locations(parent, args, { dataSources: { types } }, info) {
      return types.getValuesFor<Location>("locations", {})
    },
    async location(parent, { code }, { dataSources: { types } }, info) {
      const locations = await types.getValuesFor<Location>("locations", {});

      return locations.find(location => location.code === code);
    },
    servicePoints(parent, args, { dataSources: { servicepoints } }, info) {
      return servicepoints.getServicePoints(args)
    }
  },
  Patron: {
    user({ id }, args, { dataSources: { users } }, info) {
      return users.getUser(id)
    },
    blocks({ id }, args, { dataSources: { users } }, info) {
      return users.getBlocks(id)
    },
    manualBlocks({ id }, args, { dataSources: { users } }, info) {
      return users.getManualBlocks(id)
    },
    accounts({ id }, args, { dataSources: { users } }, info) {
      return users.getAccounts(id)
    }
  },
  Block: {
    blockCondition({ patronBlockConditionId }, args, { dataSources: { types } }, info) {
      return types.getById<PatronBlockCondition>("patron-block-conditions", { key: "patronBlockConditions" }, patronBlockConditionId);
    },
  },
  User: {
    patronGroupId({ patronGroup }, args, context, info) {
      return patronGroup;
    },
    patronGroup({ patronGroup }, args, { dataSources: { types } }, info) {
      return types.getById<PatronGroup>("groups", { key: "usergroups" }, patronGroup as unknown as string);
    },
    blocks({ id }, args, { dataSources: { users } }, info) {
      return users.getBlocks(id)
    },
    manualBlocks({ id }, args, { dataSources: { users } }, info) {
      return users.getManualBlocks(id)
    },
    accounts({ id }, args, { dataSources: { users } }, info) {
      return users.getAccounts(id)
    },
    proxiesFor({ id }, args, { dataSources: { users } }, info) {
      return users.getProxiesFor(id)
    },
    proxiesOf({ id }, args, { dataSources: { users } }, info) {
      return users.getProxiesOf(id)
    }
  },
  PatronGroup: {
    async limits({ id }, args, { dataSources: { types } }, info) {
      const arr = await types.getValuesFor<PatronBlockLimit>("patron-block-limits", { key: "patronBlockLimits" })
      return arr.filter(l => l.patronGroupId == id)
    }
  },
  PatronBlockLimit: {
    condition({ conditionId }, args, { dataSources: { types } }, info) {
      return types.getById<PatronBlockCondition>("patron-block-conditions", { key: "patronBlockConditions" }, conditionId);
    }
  },
  ProxyFor: {
    user({ userId }, args, { dataSources: { users } }, info) {
      return users.getUser(userId)
    },
    proxyUser({ proxyUserId }, args, { dataSources: { users } }, info) {
      return users.getUser(proxyUserId)
    }
  },
  Hold: {
    pickupLocation({ pickupLocationId }, args, { dataSources: { types } }, info) {
      return types.getById<ServicePoint>("service-points", { key: "servicepoints" }, pickupLocationId)
    },
    status({ status }, args, context, info) {
      switch(status as unknown as string) {
        case "Open - Not yet filled": return HoldStatus.OpenNotYetFilled
        case "Open - Awaiting pickup": return HoldStatus.OpenAwaitingPickup
        case "Open - Awaiting delivery": return HoldStatus.OpenAwaitingDelivery
        case "Open - In transit": return HoldStatus.OpenInTransit
        case "Closed - Filled": return HoldStatus.ClosedFilled
        case "Closed - Cancelled": return HoldStatus.ClosedCancelled
        case "Closed - Unfilled": return HoldStatus.ClosedUnfilled
        case "Closed - Pickup expired": return HoldStatus.ClosedPickupExpired
      }
    },
    queueTotalLength(parent, args, { dataSources }, info) {
      return dataSources.circulation.getRequestQueueLength(parent.item)
    },
    details({ requestId }, args, { dataSources: { circulation } }, info) {
      return circulation.getRequest(requestId)
    }
  },
  PatronLoan: {
    details({ id }, args, { dataSources: { circulation  } }, info) {
      return circulation.getLoan(id)
    }
  },
  Loan: {
    item({ itemId }, args, { dataSources: { items } }, info) {
      return items.getItem(itemId)
    },
    itemEffectiveLocationAtCheckOut({ itemEffectiveLocationIdAtCheckOut }, args, { dataSources: { types } }, info) {
      return types.getById<Location>("locations", {}, itemEffectiveLocationIdAtCheckOut)
    },
    loanPolicy({ loanPolicyId }, args, { dataSources: { types } }, info) {
      return types.getById<LoanPolicy>("loan-policy-storage/loan-policies", { key: 'loanPolicies' }, loanPolicyId)
    },
    user({ userId }, args, { dataSources: { users } }, info) {
      return users.getUser(userId)
    },
    proxyUser({ proxyUserId }, args, { dataSources: { users } }, info) {
      return users.getUser(proxyUserId)
    }
  },
  LoanPolicyLoansPolicy: {
    fixedDueDateSchedule({ fixedDueDateScheduleId }, args, { dataSources: { types } }, info) {
      return types.getById<FixedDueDateSchedule>("fixed-due-date-schedule-storage/fixed-due-date-schedules", { key: 'fixedDueDateSchedules' }, fixedDueDateScheduleId)
    }
  },
  LoanPolicyRenewalsPolicy: {
    alternateFixedDueDateSchedule({ alternateFixedDueDateScheduleId }, args, { dataSources: { types } }, info) {
      return types.getById<FixedDueDateSchedule>("fixed-due-date-schedule-storage/fixed-due-date-schedules", { key: 'fixedDueDateSchedules' }, alternateFixedDueDateScheduleId)
    }
  },
  PatronItem: {
    instance({ instanceId }, args, { dataSources: { instances } }, info) {
      return instances.getInstance(instanceId)
    },
    item({ itemId }, args, { dataSources: { items } }, info) {
      if (!itemId) return null;
      return items.getItem(itemId)
    }
  },
  Instance: {
    holdingsRecords({ id }, args, { dataSources: { holdings } }, info) {
      return holdings.getByInstanceId(id, args)
    },
    items({ id }, args, { dataSources: { items } }, info) {
      return items.getByInstanceId(id, args)
    },
    async queueTotalLength({ id }, args, { dataSources: { circulation } }, info) {
      return await circulation.getInstanceQueueLength(id);
    },
    async instanceFormats({ instanceFormatIds }, args, { dataSources: { types } }, info) {
      const map = await types.getMapFor<InstanceFormat>("instance-formats", { key: 'instanceFormats' })
      return instanceFormatIds.map(id => map.get(id))
    },
    instanceType({ instanceTypeId }, args, { dataSources: { types } }, info) {
      return types.getById<InstanceType>("instance-types", { key: 'instanceTypes' }, instanceTypeId)
    },
    modeOfIssuance({ modeOfIssuanceId }, args, { dataSources: { types } }, info) {
      return types.getById<ModeOfIssuance>("modes-of-issuance", { key: 'modesOfIssuance' }, modeOfIssuanceId)
    },
    orderLines({ id }, args, { dataSources: { orders } }, info) {
      return orders.getPoLines({ instanceId: id })
    }
  },
  InstanceAlternativeTitlesItem: {
    alternativeTitleType({ alternativeTitleTypeId }, args, { dataSources: { types } }, info) {
      return types.getById<AlternativeTitleType>("alternative-title-types", { key: 'alternativeTitleTypes' }, alternativeTitleTypeId)
    },
  },
  InstanceContributorsItem: {
    contributorType({ contributorTypeId }, args, { dataSources: { types } }, info) {
      return types.getById<ContributorType>("contributor-types", { key: 'contributorTypes' }, contributorTypeId)
    }
  },
  InstanceIdentifiersItem: {
    identifierTypeObject({ identifierTypeId }, args, { dataSources: { types } }, info) {
      return types.getById<IdentifierType>("identifier-types", { key: 'identifierTypes' }, identifierTypeId)
    },
  },
  InstanceElectronicAccessItem: {
    relationship({ relationshipId }, args, { dataSources: { types } }, info) {
      return types.getById<ElectronicAccessRelationship>("electronic-access-relationships", { key: 'electronicAccessRelationships' }, relationshipId)
    },
  },
  InstanceNotesItem: {
    instanceNoteType({ instanceNoteTypeId }, args, { dataSources: { types } }, info) {
      return types.getById<InstanceNoteType>("instance-note-types", { key: 'instanceNoteTypes' }, instanceNoteTypeId)
    }
  },
  HoldingsRecord: {
    items({ id }, args, { dataSources: { items } }, info) {
      return items.getByHoldingsRecordId(id, args)
    },
    instance({ instanceId }, args, { dataSources: { instances } }, info) {
      return instances.getInstance(instanceId)
    },
    permanentLocation({ permanentLocationId }, args, { dataSources: { types } }, info) {
      return types.getById<Location>("locations", {}, permanentLocationId)
    },
    temporaryLocation({ temporaryLocationId }, args, { dataSources: { types } }, info) {
      return types.getById<Location>("locations", {}, temporaryLocationId)
    },
    effectiveLocation({ effectiveLocationId }, args, { dataSources: { types } }, info) {
      return types.getById<Location>("locations", {}, effectiveLocationId)
    },
    callNumberType({ callNumberTypeId }, args, { dataSources: { types } }, info) {
      return types.getById<CallNumberType>("call-number-types", { key: 'callNumberTypes' }, callNumberTypeId)
    },
    illPolicy({ illPolicyId }, args, { dataSources: { types } }, info) {
      return types.getById<IlLpolicy>("ill-policies", { key: 'illPolicies' }, illPolicyId)
    },
    holdingsType({ holdingsTypeId }, args, { dataSources: { types } }, info) {
      return types.getById<HoldingsType>("holdings-types", { key: 'holdingsTypes' }, holdingsTypeId)
    },
    source({ sourceId }, args, { dataSources: { types } }, info) {
      return types.getById<HoldingsRecordsSource>("holdings-sources", { key: 'holdingsRecordsSources' }, sourceId)
    },
    async boundWithItem({ id }, args, { dataSources: { holdings, items } }, info) {
      const part = await holdings.getBoundWithPart(id);
      if (!part) return null;

      return items.getItem(part.itemId)
    },
    holdingSummaries({ id }, args, { dataSources: { orders } }, info) {
      return orders.getHoldingSummaries(id)
    }
  },
  HoldingsrecordElectronicAccessItem: {
    relationship({ relationshipId }, args, { dataSources: { types } }, info) {
      return types.getById<ElectronicAccessRelationship>("electronic-access-relationships", { key: 'electronicAccessRelationships' }, relationshipId)
    }
  },
  Item: {
    holdingsRecord({ holdingsRecordId }, args, { dataSources: { holdings } }, info) {
      return holdings.getHoldingsRecord(holdingsRecordId)
    },
    instance({ holdingsRecordId }, args, { dataSources: { instances } }, info) {
      return instances.getByHoldingsRecordId(holdingsRecordId)
    },
    permanentLocation({ permanentLocationId }, args, { dataSources: { types } }, info) {
      return types.getById<Location>("locations", {}, permanentLocationId)
    },
    temporaryLocation({ temporaryLocationId }, args, { dataSources: { types } }, info) {
      return types.getById<Location>("locations", {}, temporaryLocationId)
    },
    effectiveLocation({ effectiveLocationId }, args, { dataSources: { types } }, info) {
      return types.getById<Location>("locations", {}, effectiveLocationId)
    },
    itemDamagedStatus({ itemDamagedStatusId }, args, { dataSources: { types } }, info) {
      return types.getById<ItemDamagedStatus>("item-damaged-statuses", {}, itemDamagedStatusId)
    },
    inTransitDestinationServicePoint({ inTransitDestinationServicePointId }, args, { dataSources: { types } }, info) {
      return types.getById<ServicePoint>("service-points", {}, inTransitDestinationServicePointId)
    },
    permanentLoanType({ permanentLoanTypeId }, args, { dataSources: { types } }, info) {
      return types.getById<LoanType>("loan-types", { key: 'loantypes' }, permanentLoanTypeId)
    },
    temporaryLoanType({ temporaryLoanTypeId }, args, { dataSources: { types } }, info) {
      return types.getById<LoanType>("loan-types", { key: 'loantypes' }, temporaryLoanTypeId)
    },
    itemLevelCallNumberType({ itemLevelCallNumberTypeId }, args, { dataSources: { types } }, info) {
      return types.getById<CallNumberType>("call-number-types", { key: 'callNumberTypes' }, itemLevelCallNumberTypeId)
    },
    materialType({ materialTypeId }, args, { dataSources: { types } }, info) {
      return types.getById<MaterialType>("material-types", { key: 'mtypes' }, materialTypeId)
    },
    async queueTotalLength({ id }, args, { dataSources: { circulation } }, info) {
      return await circulation.getItemQueueLength(id);
    },
    async dueDate({ id }, args, { dataSources: { circulation } }, info) {
      const loans = await circulation.getLoans({ itemId: id, "status.name": 'open' });

      if (loans.length === 0) return null;

      return loans[0].dueDate;
    },
    async boundWithHoldingsPerItem({ id }, args, { dataSources: { holdings, items } }, info) {
      const results = await holdings.getBoundWithHoldingsPerItem(id);
      if (!results) return null;

      return results;
    },
    notes: async ({ notes }, args, { dataSources: { types } }) => {
      // For each note, fetch the corresponding itemNoteType
      const populatedNotes = notes.map(async (note) => {
        const itemNoteType = await types.getById("item-note-types", { key: 'itemNoteTypes' }, note.itemNoteTypeId) as ItemNoteType;
        return { ...note, itemNoteType };
      });

      return populatedNotes;
    },
  },
  ItemCirculationNotesItem: {
    noteType({ noteType }, args, { dataSources: { types } }, info) {
      switch (noteType as unknown as string) {
        case "Check in": return ItemCirculationNotesItemNoteType.CheckIn
        case "Check out": return ItemCirculationNotesItemNoteType.CheckOut
      }
    }
  },
  ItemEffectiveCallNumberComponents: {
    type({ typeId }, args, { dataSources: { types } }, info) {
      return types.getById<CallNumberType>("call-number-types", { key: 'callNumberTypes' }, typeId)
    }
  },
  InstanceClassificationsItem: {
    classificationType({ classificationTypeId }, args, { dataSources: { types } }, info) {
      return types.getById<ClassificationType>("classification-types", {}, classificationTypeId)
    }
  },
  Location: {
    institution({ institutionId }, args, { dataSources: { types } }, info) {
      return types.getById<Institution>("location-units/institutions", { key: "locinsts" }, institutionId);
    },
    campus({ campusId }, args, { dataSources: { types } }, info) {
      return types.getById<Campus>("location-units/campuses", { key: "loccamps" }, campusId)
    },
    library({ libraryId }, args, { dataSources: { types } }, info) {
      return types.getById<Library>("location-units/libraries", { key: "loclibs" }, libraryId)
    },
    primaryServicePointObject({ primaryServicePoint }, args, { dataSources: { types } }, info) {
      return types.getById<ServicePoint>("service-points", { key: "servicepoints" }, primaryServicePoint)
    },
    servicePoints({ servicePointIds = [] }, args, { dataSources: { types } }, info) {
      return types.getByIds<ServicePoint>("service-points", { key: "servicepoints" }, servicePointIds)
    },
  },
  LocationDetails: {
    pageServicePoints({ pageServicePointCodes }, args, { dataSources: { servicepoints } }, info) {
      if (!pageServicePointCodes) return Promise.resolve([])

      return servicepoints.getServicePoints({ 'code': pageServicePointCodes.split(",") })
    },
    scanServicePoint({ scanServicePointCode }, args, { dataSources: { servicepoints } }, info) {
      if (!scanServicePointCode) return

      return servicepoints.getByCode(scanServicePointCode)
    },
  },
  Campus: {
    institution({ institutionId }, args, { dataSources: { types } }, info) {
      return types.getById<Institution>("location-units/institutions", { key: "locinsts" }, institutionId)
    },
    async libraries({ id }, args, { dataSources: { types } }, info) {
      const values = await types.getValuesFor<Library>("location-units/libraries", { key: "loclibs" })

      return values.filter(v => v.campusId == id)
    }
  },
  Library: {
    campus({ campusId }, args, { dataSources: { types } }, info) {
      return types.getById<Campus>("location-units/campuses", { key: "loccamps" }, campusId)
    },
    async locations({ id }, args, { dataSources: { types } }, info) {
      const values = await types.getValuesFor<Location>("locations", {})
      return values.filter(v => v.libraryId == id)
    },
  },
  Account: {
    user({ userId }, args, { dataSources: { users } }, info) {
      return users.getUser(userId)
    },
    actions({ id }, args, { dataSources: { users } }, info) {
      return users.getFeeFineActions(id)
    },
    loan({ loanId }, args, { dataSources: { circulation } }, info) {
      return circulation.getLoan(loanId)
    },
    item({ itemId }, args, { dataSources: { items } }, info) {
      if (!itemId) return null;
      return items.getItem(itemId)
    },
    feeFine({ feeFineId }, args, { dataSources: { feefines } }, info) {
      return feefines.getFeeFine(feeFineId)
    },
  },
  HoldingSummary: {
    poLine({ poLineId }, args, { dataSources: { orders } }, info) {
      return orders.getPoLine(poLineId)
    },
    pieces({ poLineId }, args, { dataSources: { orders } }, info) {
      return orders.getPieces({ poLineId: poLineId })
    }
  },
  PoLine: {
    pieces({ id }, args, { dataSources: { orders } }, info) {
      return orders.getPieces({ poLineId: id })
    }
  },
  UUID: UUIDResolver
}
