import type { ItemResolvers, Location } from './../../types.generated';
import FolioContext from "../../../context";
export const Item: ItemResolvers = {
  holdingsRecord(parent, args, { dataSources }, info) {
    return dataSources.holdings.getHoldingsRecord(parent.holdingsRecordId)
  },
  instance(parent, args, { dataSources }, info) {
    return dataSources.instances.getByHoldingsRecordId(parent.holdingsRecordId)
  },
  permanentLocation(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.permanentLocationId))
  },
  temporaryLocation(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.temporaryLocationId))
  },
  effectiveLocation(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<Location>("locations", { cache: typeCache }).then(map => map.get(parent.effectiveLocationId))
  }
  };
