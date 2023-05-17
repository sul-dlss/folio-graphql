# folio-graphql
## Install dependencies
```sh
npm install
```

## Compile typescript
```sh
npm run compile
```

## Configure
create a local configuration file, and fill in credentials:
```sh
cp config/default.json config/local.json
```

## Start the server
```sh
npm server.mjs
```
The server will start on http://localhost:4000/

or using docker:
```
OKAPI_USERNAME=<user> OKAPI_PASSWORD=<password> docker compose up app
```

## Developing

start the server:
```sh
npm start:dev
```
to regenerate the typescript typings when changing the graphql schema:
```sh
npm run codegen
```
