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
import MaterialTypesAPI from '../src/folio/material-types-api';
import OrdersAPI from '../src/folio/orders-api';
import RtacApi from '../src/folio/rtac-api';
import FolioAPI from '../src/folio/folio-api';
import AuthnAPI from '../src/folio/authn-api';
import OkapiAPI from '../src/folio/okapi-api';

// set up fetchMock
beforeEach(() => {
  fetchMock.resetMocks();
  fetchMock.enableMocks();
  fetchMock.doMock();
})

// Helper function to get request URL
export const mockFolioRequestUrl = () => {
  return decodeURIComponent((fetchMock.mock.calls[0][0] as string))
};

export const mockFolioResponse = (data: object) => {
  fetchMock.mockResponseOnce((req: Request) => {
    return Promise.resolve({ 
      body: JSON.stringify(data),
      status: 200, 
      headers: { "Content-Type": 'application/json' }});
  });
};

// Create a custom matcher essentially to check if a string contains a substring
// This will be used to check if the request URL contains the expected path
expect.extend({
  toContainPath(received, expected) {
      const pass = received.includes(expected);
      if (pass) {
          return {
              message: () => `Expected ${received} not to contain ${expected}`,
              pass: true,
          };
      } else {
          return {
              message: () => `Expected ${received} to contain ${expected}`,
              pass: false,
          };
      }
  },
});
// Register the custom matcher type
declare global {
  namespace jest {
      interface Matchers<R> {
          toContainPath(expected: string): R;
      }
  }
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
export const dataSources = {
  authn: new AuthnAPI(apiOptions),
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
  orders: new OrdersAPI(apiOptions),
  rtac: new RtacApi(apiOptions),
  folio: new FolioAPI(apiOptions),
  okapi: new OkapiAPI(apiOptions)
}
const context: FolioContext = {
  token,
  dataSources
}

// expose queryTestServer for use in tests
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
