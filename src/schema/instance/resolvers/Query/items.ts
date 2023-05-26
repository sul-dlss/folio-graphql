import type   { QueryResolvers } from './../../../types.generated';
export const items: NonNullable<QueryResolvers['items']> = async (parent, args, { dataSources }, info) => {
        return dataSources.items.getItems(args)
}
