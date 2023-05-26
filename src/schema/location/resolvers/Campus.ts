import type { CampusResolvers, Institution } from './../../types.generated';
import FolioContext from "../../../context";
export const Campus: CampusResolvers = {
  institution(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<Institution>("location-units/institutions", { key: "locinsts", cache: typeCache }).then(map => map.get(parent.institutionId))
  }
  };
