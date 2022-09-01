# folio-graphql
## developing
install dependencies:
```sh
npm install
```
create a local configuration file, and fill in credentials:
```sh
cp config/default.json config/local.json
```
start the server:
```sh
npm start
```
to regenerate the typescript typings when changing the graphql schema:
```sh
npm run codegen
```
