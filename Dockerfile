FROM node:22-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["node", "dist/server.js"]
