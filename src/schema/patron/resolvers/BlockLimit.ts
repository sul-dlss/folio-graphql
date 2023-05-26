import type { BlockLimitResolvers, BlockCondition } from './../../types.generated';
import FolioContext from "../../../context";

export const BlockLimit: BlockLimitResolvers = {
  condition(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<BlockCondition>("patron-block-conditions", { key: "patronBlockConditions", cache: typeCache }).then(map => map.get(parent.conditionId));
  }
};
