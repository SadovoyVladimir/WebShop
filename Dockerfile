FROM node:18 as client

WORKDIR /app/client

COPY client/package.json /app/client

RUN npm install -g npm@9.6.7

RUN npm install

COPY client /app/client

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY server/package.json /app

RUN npm install

COPY server /app

COPY --from=client /app/client/build /app/client

EXPOSE 8080

CMD [ "npm", "start" ]