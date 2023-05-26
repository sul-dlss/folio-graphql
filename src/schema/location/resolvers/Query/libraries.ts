import type { QueryResolvers, Library } from './../../../types.generated';
import FolioContext from "../../../../context"

export const libraries: NonNullable<QueryResolvers['libraries']> = async (parent, args, { dataSources, typeCache }: FolioContext, info) => {
        return dataSources.types.getValuesFor<Library>("location-units/libraries", { key: "loclibs", cache: typeCache })
}
