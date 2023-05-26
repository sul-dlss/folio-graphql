import type { ClassificationResolvers, ClassificationType } from './../../types.generated';
import FolioContext from "../../../context";

export const Classification: ClassificationResolvers = {
  classificationType(parent, args, { dataSources, typeCache }: FolioContext, info) {
    return dataSources.types.getMapFor<ClassificationType>("classification-types", { cache: typeCache }).then(map => map.get(parent.classificationTypeId))
  }
  };
