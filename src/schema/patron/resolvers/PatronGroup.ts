import type { PatronGroupResolvers, BlockLimit } from './../../types.generated';
import FolioContext from "../../../context";

export const PatronGroup: PatronGroupResolvers = {
  limits(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getValuesFor<BlockLimit>("patron-block-limits", { key: "patronBlockLimits", cache: typeCache }).then(arr => arr.filter(l => l.patronGroupId == parent.id));
  }
};
