import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { RESTDataSource, WillSendRequestOptions } from '@apollo/datasource-rest';
import { Patron } from './schema';

// import { PatronsAPI } from './patrons-api';

// const patrons = [
//     {
//         id: 1,
//         name: 'Kate Chopin',
//     },
//     {
//         id: 2,
//         name: 'Paul Auster',
//     },
// ];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
// const resolvers = {
//     Query: {
//         patrons: () => patrons,
//     },
// };

// Read the schema.graphql into utf-8 string so we can pass it to Apollo
const typeDefs = readFileSync('schema.graphql').toString('utf-8');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
})

console.log(`🚀  Server ready at: ${url}`)
