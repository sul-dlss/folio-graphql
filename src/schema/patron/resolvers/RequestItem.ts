import type   { RequestItemResolvers } from './../../types.generated';
export const RequestItem: RequestItemResolvers = {
  instance(parent, args, { dataSources }, info) {
    return dataSources.instances.getInstance(parent.instanceId)
  },
  item(parent, args, { dataSources }, info) {
    return dataSources.items.getItem(parent.itemId)
  }
  };
