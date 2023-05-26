import type   { QueryResolvers } from './../../../types.generated';
export const holdingsRecord: NonNullable<QueryResolvers['holdingsRecord']> = async (parent, args, { dataSources }, info) => {
        return dataSources.holdings.getHoldingsRecords(args)
}
