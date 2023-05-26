import type { UserResolvers, PatronGroup } from './../../types.generated';
import FolioContext from "../../../context";

export const User: UserResolvers = {
  patronGroupId(parent, args, { dataSources }, info) {
    return (parent.patronGroup as unknown) as string;
  },
  patronGroup(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<PatronGroup>("groups", { key: "usergroups", cache: typeCache }).then(map => map.get(parent.patronGroupId));
  },
  blocks(parent, args, { dataSources }, info) {
    return dataSources.users.getBlocks(parent.id)
  },
  manualBlocks(parent, args, { dataSources }, info) {
    return dataSources.users.getManualBlocks(parent.id)
  },
  accounts(parent, args, { dataSources }, info) {
    return dataSources.users.getAccounts(parent.id)
  },
  proxyFor(parent, args, { dataSources }, info) {
    return dataSources.users.getProxiesFor(parent.id)
  },
  proxies(parent, args, { dataSources }, info) {
    return dataSources.users.getProxiesOf(parent.id)
  }
  };
