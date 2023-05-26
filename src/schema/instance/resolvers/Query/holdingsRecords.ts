import type   { QueryResolvers } from './../../../types.generated';
export const holdingsRecords: NonNullable<QueryResolvers['holdingsRecords']> = async (parent, args, { dataSources }, info) => {
        return dataSources.holdings.getHoldingsRecords(args)
}
