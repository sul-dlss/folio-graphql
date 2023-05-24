import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { GraphQLError } from 'graphql';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { resolvers } from './dist/index.js';

import { readFileSync } from "fs"
import Honeybadger from '@honeybadger-io/js';

import PatronsAPI from "./dist/patrons-api.js"
import UsersAPI from "./dist/users-api.js"
import LocationsAPI from "./dist/locations-api.js"
import InstancesAPI from "./dist/instances-api.js"
import ItemsAPI from "./dist/items-api.js"
import HoldingsAPI from "./dist/holdings-api.js"
import TypeAPI from "./dist/type-api.js"
import FeeFinesAPI from "./dist/feefines-api.js"
import FolioAPI from "./dist/folio-api.js"
import CirculationAPI from "./dist/circulation-api.js"
import OkapiAPI from "./dist/okapi-api.js"

// Read the schema.graphql into utf-8 string so we can pass it to Apollo
const typeDefs = readFileSync("schema.graphql").toString("utf-8")

class AuthnAPI extends FolioAPI {

}

const app = express();
const httpServer = http.createServer(app);

function getTokenFromRequest(req) {
  if (!req.headers.okapi_username || !req.headers.okapi_password) {
    throw new GraphQLError(
      'Need to provide username and password in request',
      {
        extensions: {
          code: 'UNAUTHENTICATED',
          http: { status: 401 },
        }
      },
    );
  }

  return new AuthnAPI({}).post("authn/login", {
    body: {
      username: req.headers.okapi_username,
      password: req.headers.okapi_password,
    }
  })
    .then(response => ({
      token: response.okapiToken,
      refreshToken: response.refreshToken
    }))
    .catch(error => {
      throw new GraphQLError('User is not authenticated',
        {
          extensions: {
            code: 'UNAUTHENTICATED',
            http: { status: 401 },
          }
        });
    })
}

const context = async ({ req }) => {
  const { token } = await getTokenFromRequest(req);
  const { cache } = server;

  return {
    token,
    dataSources: {
      patrons: new PatronsAPI({ cache, token }),
      users: new UsersAPI({ cache, token }),
      locations: new LocationsAPI({ cache, token }),
      instances: new InstancesAPI({ cache, token }),
      items: new ItemsAPI({ cache, token }),
      holdings: new HoldingsAPI({ cache, token }),
      types: new TypeAPI({ cache, token }),
      feefines: new FeeFinesAPI({ cache, token }),
      circulation: new CirculationAPI({ cache, token }),
    },
    typeCache: new Map()
  }
}

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});
await server.start();

app.get('/status', async (req, res) => {
  await new OkapiAPI().get('/_/version').then(_response => res.status(200).send('OK')).catch(error => res.status(500).send(error))
});
app.use(Honeybadger.requestHandler) // Use *before* all other app middleware.
app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server, { context }),
);
app.use(Honeybadger.errorHandler) // Use *after* all other app middleware

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));


console.log(`🚀 Server ready at http://localhost:4000`);
