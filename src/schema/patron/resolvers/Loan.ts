import type   { LoanResolvers } from './../../types.generated';
export const Loan: LoanResolvers = {
  details(parent, args, { dataSources }, info) {
    return dataSources.circulation.getLoan(parent.id)
  }
  };
