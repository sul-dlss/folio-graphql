import type   { HoldResolvers } from './../../types.generated';
export const Hold: HoldResolvers = {
  pickupLocation(parent, args, { dataSources }, info) {
    return dataSources.locations.getLocation(parent.pickupLocationId)
  }
  };
