import type   { ChargeResolvers } from './../../types.generated';
export const Charge: ChargeResolvers = {
  feeFine(parent, args, { dataSources }, info) {
    return dataSources.feefines.getFeeFine(parent.feeFineId)
  }
  };
