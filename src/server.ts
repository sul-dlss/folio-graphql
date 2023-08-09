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
import ServicePointsAPI from "./folio/service-points-api.js"
import InstancesAPI from "./folio/instances-api.js"
import ItemsAPI from "./folio/items-api.js"
import HoldingsAPI from "./folio/holdings-api.js"
import TypeAPI from "./folio/type-api.js"
import FeeFinesAPI from "./folio/feefines-api.js"
import CirculationAPI from "./folio/circulation-api.js"
import MaterialTypesAPI from './folio/material-type-api.js'
import OrdersAPI from './folio/orders-api.js'
import AuthnAPI from "./folio/authn-api.js"
import OkapiAPI from "./folio/okapi-api.js"
import { FolioContext } from './context.js'

// Read the schema.graphql into utf-8 string so we can pass it to Apollo
const typeDefs = readFileSync(path.resolve(__dirname, "schema.graphql")).toString("utf-8")

const app = express();
const httpServer = http.createServer(app);

async function getTokenFromRequest(req: express.Request): Promise<{ token: string, refreshToken: string }> {
  if (!req.get('okapi_username') || !req.get('okapi_password')) {
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

  try {
    const response = await new AuthnAPI().login(req.get('okapi_username'), req.get('okapi_password'));
    return ({
      token: response.okapiToken,
      refreshToken: response.refreshToken
    });
  } catch (error) {
    throw new GraphQLError('User is not authenticated',
      {
        extensions: {
          code: 'UNAUTHENTICATED',
          http: { status: 401 },
        }
      });
  }
}

const context = async ({ req }: Partial<{ req: express.Request }>) => {
  const { token } = await getTokenFromRequest(req);
  const typeCache = new Map()
  const { cache } = server;

  return {
    token,
    dataSources: {
      patrons: new PatronsAPI({ cache, token }),
      users: new UsersAPI({ cache, token }),
      servicepoints: new ServicePointsAPI({ cache, token }),
      instances: new InstancesAPI({ cache, token }),
      items: new ItemsAPI({ cache, token }),
      holdings: new HoldingsAPI({ cache, token }),
      types: new TypeAPI({ cache, token, typeCache }),
      feefines: new FeeFinesAPI({ cache, token }),
      circulation: new CirculationAPI({ cache, token }),
      materialtypes: new MaterialTypesAPI({ cache, token }),
      orders: new OrdersAPI({ cache, token }),
    }
  }
}

// Set up Apollo Server
const server = new ApolloServer<FolioContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});
await server.start();

app.get('/status', async (req, res) => {
  await new OkapiAPI().getVersion().then(() => res.status(200).send('OK')).catch(error => res.status(500).send(error))
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
