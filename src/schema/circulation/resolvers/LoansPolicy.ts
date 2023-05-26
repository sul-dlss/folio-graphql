import type { LoansPolicyResolvers, FixedDueDateSchedule } from './../../types.generated';
import FolioContext from "../../../context";

export const LoansPolicy: LoansPolicyResolvers = {
  fixedDueDateSchedule(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<FixedDueDateSchedule>("fixed-due-date-schedule-storage/fixed-due-date-schedules", { key: 'fixedDueDateSchedules', cache: typeCache }).then(map => map.get(parent.fixedDueDateScheduleId))
  }
};
