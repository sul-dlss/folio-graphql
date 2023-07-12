import fetchMock from 'jest-fetch-mock';
import { readFileSync } from "fs"
import path from 'path';
import { resolvers } from '../src/folio/index';
import { FolioContext } from '../src/context';
import { ApolloServer } from '@apollo/server';
import CirculationAPI from '../src/folio/circulation-api';
import FeeFinesAPI from '../src/folio/feefines-api';
import HoldingsAPI from '../src/folio/holdings-api';
import InstancesAPI from '../src/folio/instances-api';
import ItemsAPI from '../src/folio/items-api';
import ServicePointsAPI from '../src/folio/service-points-api';
import PatronsAPI from '../src/folio/patrons-api';
import TypeAPI from '../src/folio/type-api';
import UsersAPI from '../src/folio/users-api';
import MaterialTypesAPI from '../src/folio/material-type-api';

// set up fetchMock
beforeEach(() => {
  fetchMock.resetMocks();
  fetchMock.enableMocks();
  fetchMock.doMock();
})

// expose mockResponse for use in tests, allowing each test to pass in its own expected response data
export const mockResponse = (match: RegExp, data: object) => {
  fetchMock.mockIf(match, async _req => ({ body: JSON.stringify(data), status: 200, headers: { "Content-Type": 'application/json' }}));
}
// Read the schema.graphql into utf-8 string so we can pass it to Apollo
const typeDefs = readFileSync(path.resolve(__dirname, "../src/schema.graphql")).toString("utf-8")
const testServer = new ApolloServer<FolioContext>({
  typeDefs,
  resolvers,
});
const token = '';
const apiOptions = {
  token: token,
  fetch: fetchMock
};
const context: FolioContext = {
  token,
  dataSources: {
    patrons: new PatronsAPI(apiOptions),
    users: new UsersAPI(apiOptions),
    servicepoints: new ServicePointsAPI(apiOptions),
    instances: new InstancesAPI(apiOptions),
    items: new ItemsAPI(apiOptions),
    holdings: new HoldingsAPI(apiOptions),
    types: new TypeAPI(apiOptions),
    feefines: new FeeFinesAPI(apiOptions),
    circulation: new CirculationAPI(apiOptions),
    materialtypes: new MaterialTypesAPI(apiOptions),
  }
}

// expose queryTestServer for use in tests, allowing each test to pass in its own query and variables
export const queryTestServer = async (args: { query: string, variables: any }) => {
  const response = await testServer.executeOperation(
    args,
    {
      contextValue: context
    }
  );
  // This gets rid of [Object: null prototype] in the GraphQL response
  return JSON.parse(JSON.stringify(response));
}
