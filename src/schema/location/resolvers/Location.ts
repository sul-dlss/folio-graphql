import type { LocationResolvers, Institution, Campus, Library, ServicePoint } from './../../types.generated';
import FolioContext from "../../../context";

export const Location: LocationResolvers = {
  institution(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<Institution>("location-units/institutions", { key: "locinsts", cache: typeCache }).then(map => map.get(parent.institutionId))
  },
  campus(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<Campus>("location-units/campuses", { key: "loccamps", cache: typeCache }).then(map => map.get(parent.campusId))
  },
  library(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<Library>("location-units/libraries", { key: "loclibs", cache: typeCache }).then(map => map.get(parent.libraryId))
  },
  primaryServicePointObject(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<ServicePoint>("service-points", { key: "servicepoints", cache: typeCache }).then(map => map.get(parent.primaryServicePoint))
  },
  servicePoints(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getValuesFor<ServicePoint>("service-points", { key: "servicepoints", cache: typeCache }).then(arr => arr.filter(sp => parent.servicePointIds.includes(sp.id)))
  }
  };
