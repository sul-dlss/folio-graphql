import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { resolvers } from './dist/index.js';

import { readFileSync } from "fs"
import Honeybadger from '@honeybadger-io/js';

// Read the schema.graphql into utf-8 string so we can pass it to Apollo
const typeDefs = readFileSync("schema.graphql").toString("utf-8")


const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(Honeybadger.requestHandler) // Use *before* all other app middleware.
app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server),
);
app.use(Honeybadger.errorHandler) // Use *after* all other app middleware

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);
