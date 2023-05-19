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
By default the configuration is set to read from environment variables `OKAPI_BASE_URL`, but you can overwrite this config by creating `config/local.json` and setting values you wish to use.
```sh
cp config/default.json config/local.json
```

## Start the server
```sh
node server.mjs
```
The server will start on http://localhost:4000/

or using docker:
```
docker compose up app
```

Clients must provide the headers okapi_username and okapi_password.  The server will use these to authenticate with okapi and retrieve Sr.

## Developing

start the server:
```sh
npm start:dev
```
to regenerate the typescript typings when changing the graphql schema:
```sh
npm run codegen
```

## Deploying

Github actions deploys the image to docker hub.  Once that is complete you can push the image to the server:

```sh
ssh graphql@sul-folio-graphql-test.stanford.edu \
'docker pull suldlss/folio-graphql:latest && \
docker rm $(docker stop $(docker ps -a -q --filter="name=folio-graphql")) && \
docker run -d --env-file ./.env -p 4000:4000 --name folio-graphql suldlss/folio-graphql:latest'
```
