import type { LibraryResolvers, Campus, Location } from './../../types.generated';
import FolioContext from "../../../context";
export const Library: LibraryResolvers = {
  campus(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<Campus>("location-units/campuses", { key: "loccamps", cache: typeCache }).then(map => map.get(parent.campusId))
  },
  locations(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getValuesFor<Location>("locations", { cache: typeCache }).then(values => values.filter(v => v.libraryId == parent.id))
  },
  };
