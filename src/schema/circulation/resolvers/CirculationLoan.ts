import type { CirculationLoanResolvers, Location, LoanPolicy } from './../../types.generated';
import FolioContext from "../../../context";

export const CirculationLoan: CirculationLoanResolvers = {
  item(parent, args, { dataSources }, info) {
    return dataSources.items.getItem(parent.itemId)
  },
  itemEffectiveLocationAtCheckOut(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.itemEffectiveLocationIdAtCheckOut))
  },
  loanPolicy(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<LoanPolicy>("loan-policy-storage/loan-policies", { key: 'loanPolicies', cache: typeCache }).then(map => map.get(parent.loanPolicyId))
  }
};
