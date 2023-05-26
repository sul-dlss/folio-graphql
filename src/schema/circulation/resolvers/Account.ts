import type { AccountResolvers } from './../../types.generated';

export const Account: AccountResolvers = {
  user(parent, args, { dataSources }, info) {
    return dataSources.users.getUser(parent.userId)
  },
  loan(parent, args, { dataSources }, info) {
    return dataSources.circulation.getLoan(parent.id)
  },
  item(parent, args, { dataSources }, info) {
    return dataSources.items.getItem(parent.itemId)
  },
  feeFine(parent, args, { dataSources }, info) {
    return dataSources.feefines.getFeeFine(parent.feeFineId)
  },
};
