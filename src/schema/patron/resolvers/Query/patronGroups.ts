import type { QueryResolvers, PatronGroup } from './../../../types.generated';
import FolioContext from "../../../../context";

export const patronGroups: NonNullable<QueryResolvers['patronGroups']> = async (parent, args, { dataSources, typeCache }: FolioContext, info) => {
        return dataSources.types.getValuesFor<PatronGroup>("groups", { key: "usergroups", cache: typeCache })
}
