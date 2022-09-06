import { readFileSync } from "fs"

import { DateResolver, EmailAddressResolver, UUIDResolver } from "graphql-scalars"
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

import PatronsAPI from "./patrons-api.js"
import UsersAPI from "./users-api.js"
import LocationsAPI from "./locations-api.js"
import InstancesAPI from "./instances-api.js"
import ItemsAPI from "./items-api.js"
import HoldingsAPI from "./holdings-api.js"

const patrons = new PatronsAPI()
const users = new UsersAPI()
const locations = new LocationsAPI()
const instances = new InstancesAPI()
const items = new ItemsAPI()
const holdings = new HoldingsAPI()

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    patron(parent, args, context, info) {
      return patrons.getPatron(args.id)
    },
    instance(parent, args, context, info) {
      return instances.getInstance(args.id)
    },
    instances(parent, args, context, info) {
      return instances.getInstances(args)
    },
    holdingsRecord(parent, args, context, info) {
      return holdings.getHoldingsRecord(args.id)
    },
    holdingsRecords(parent, args, context, info) {
      return holdings.getHoldingsRecords(args)
    },
    item(parent, args, context, info) {
      return items.getItem(args.id)
    },
    items(parent, args, context, info) {
      return items.getItems(args)
    }
  },
  Patron: {
    user(parent, args, context, info) {
      return users.getUser(parent.id)
    },
  },
  Hold: {
    pickupLocation(parent, args, context, info) {
      return locations.getLocation(parent.pickupLocationId)
    }
  },
  RequestItem: {
    instance(parent, args, context, info) {
      return instances.getInstance(parent.instanceId)
    },
    item(parent, args, context, info) {
      return items.getItem(parent.itemId)
    }
  },
  Instance: {
    holdingsRecords(parent, args, context, info) {
      return holdings.getByInstanceId(parent.id, args)
    },
    items(parent, args, context, info) {
      return items.getByInstanceId(parent.id, args)
    }
  },
  HoldingsRecord: {
    items(parent, args, context, info) {
      return items.getByHoldingsRecordId(parent.id, args)
    },
    instance(parent, args, context, info) {
      return instances.getInstance(parent.instanceId)
    }
  },
  Item: {
    holdingsRecord(parent, args, context, info) {
      return holdings.getHoldingsRecord(parent.holdingsRecordId)
    },
    instance(parent, args, context, info) {
      return instances.getByHoldingsRecordId(parent.holdingsRecordId)
    }
  },
  Date: DateResolver,
  UUID: UUIDResolver,
  EmailAddress: EmailAddressResolver
}

// Read the schema.graphql into utf-8 string so we can pass it to Apollo
const typeDefs = readFileSync("schema.graphql").toString("utf-8")

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`)
