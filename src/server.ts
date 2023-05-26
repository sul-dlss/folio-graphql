import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { GraphQLError } from 'graphql';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

import { readFileSync } from "fs"
import path from 'path';
import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import Honeybadger from '@honeybadger-io/js';

import { resolvers } from './folio/index.js';
import PatronsAPI from "./folio/patrons-api.js"
import UsersAPI from "./folio/users-api.js"
import LocationsAPI from "./folio/locations-api.js"
import InstancesAPI from "./folio/instances-api.js"
import ItemsAPI from "./folio/items-api.js"
import HoldingsAPI from "./folio/holdings-api.js"
import TypeAPI from "./folio/type-api.js"
import FeeFinesAPI from "./folio/feefines-api.js"
import CirculationAPI from "./folio/circulation-api.js"
import AuthnAPI from "./folio/authn-api.js"
import OkapiAPI from "./folio/okapi-api.js"

// Read the schema.graphql into utf-8 string so we can pass it to Apollo
const typeDefs = readFileSync(path.resolve(__dirname, "schema.graphql")).toString("utf-8")

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

  return new AuthnAPI().login(req.headers.okapi_username, req.headers.okapi_password)
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
  await new OkapiAPI().getVersion().then(_response => res.status(200).send('OK')).catch(error => res.status(500).send(error))
});
app.use(Honeybadger.requestHandler) // Use *before* all other app middleware.
app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server, { context }),
);
app.use(Honeybadger.errorHandler) // Use *after* all other app middleware

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));


console.log(`🚀 Server ready at http://localhost:4000`);
