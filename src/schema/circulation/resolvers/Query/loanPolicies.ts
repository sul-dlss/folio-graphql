import type { QueryResolvers, LoanPolicy } from './../../../types.generated';
import FolioContext from "../../../../context"

export const loanPolicies: NonNullable<QueryResolvers['loanPolicies']> = async (parent, args, { dataSources, typeCache }: FolioContext, info) => { return dataSources.types.getValuesFor<LoanPolicy>("loan-policy-storage/loan-policies", { key: 'loanPolicies', cache: typeCache }) };
