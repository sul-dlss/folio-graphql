import type { QueryResolvers, RequestPolicy } from './../../../types.generated';
import FolioContext from "../../../../context";

export const requestPolicies: NonNullable<QueryResolvers['requestPolicies']> = async (parent, args, { dataSources, typeCache }: FolioContext, info) => { return dataSources.types.getValuesFor<RequestPolicy>("request-policy-storage/request-policies", { key: 'requestPolicies', cache: typeCache }) };
