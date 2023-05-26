import type   { QueryResolvers } from './../../../types.generated';
export const item: NonNullable<QueryResolvers['item']> = async (parent, args, { dataSources }, info) => {
        return dataSources.items.getItem(args.id)
}
