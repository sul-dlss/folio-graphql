import type { HoldingsRecordResolvers, Location } from './../../types.generated';
import FolioContext from "../../../context";

export const HoldingsRecord: HoldingsRecordResolvers = {
  items(parent, args, { dataSources }, info) {
    return dataSources.items.getByHoldingsRecordId(parent.id, args)
  },
  instance(parent, args, { dataSources }, info) {
    return dataSources.instances.getInstance(parent.instanceId)
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
