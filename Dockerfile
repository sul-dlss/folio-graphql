FROM node:20-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 4000
RUN npm ts-build
CMD ["node", "server.mjs"]