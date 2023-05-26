import type   { InstanceResolvers } from './../../types.generated';
export const Instance: InstanceResolvers = {
  holdingsRecords(parent, args, { dataSources }, info) {
    return dataSources.holdings.getByInstanceId(parent.id, args)
  },
  items(parent, args, { dataSources }, info) {
    return dataSources.items.getByInstanceId(parent.id, args)
  }
  };
