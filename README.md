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
By default the configuration is set to read from environment variables `OKAPI_BASE_URL`, `OKAPI_USERNAME`, and `OKAPI_PASSWORD`, but you can overwrite this config by creating `config/local.json` and setting values you wish to use.
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
