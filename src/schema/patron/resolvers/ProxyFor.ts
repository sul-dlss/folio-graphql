import type   { ProxyForResolvers } from './../../types.generated';
export const ProxyFor: ProxyForResolvers = {
  user(parent, args, { dataSources }, info) {
    return dataSources.users.getUser(parent.userId)
  },
  proxyUser(parent, args, { dataSources }, info) {
    return dataSources.users.getUser(parent.proxyUserId)
  }
};
