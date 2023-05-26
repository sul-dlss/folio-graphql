import type   { QueryResolvers } from './../../../types.generated';
export const patron: NonNullable<QueryResolvers['patron']> = async (parent, args, { dataSources }, info) => {
        return dataSources.patrons.getPatron(args.id)
}
