import type   { QueryResolvers } from './../../../types.generated';
export const instance: NonNullable<QueryResolvers['instance']> = async (parent, args, { dataSources }, info) => {
        return dataSources.instances.getInstance(args.id)
}
