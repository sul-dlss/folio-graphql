import type   { PatronResolvers } from './../../types.generated';
export const Patron: PatronResolvers = {
  user(parent, args, { dataSources }, info) {
    return dataSources.users.getUser(parent.id)
  },
  blocks(parent, args, { dataSources }, info) {
    return dataSources.users.getBlocks(parent.id)
  },
  manualBlocks(parent, args, { dataSources }, info) {
    return dataSources.users.getManualBlocks(parent.id)
  },
  accounts(parent, args, { dataSources }, info) {
    return dataSources.users.getAccounts(parent.id)
  }
  };
