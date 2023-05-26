import type   { QueryResolvers } from './../../../types.generated';
export const instances: NonNullable<QueryResolvers['instances']> = async (parent, args, { dataSources }, info) => {
        return dataSources.instances.getInstances(args)
}
