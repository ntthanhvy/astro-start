FROM node:16-alpine as BUILD

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

ENTRYPOINT [ "node" ]
CMD [ "dist/server/entry.js" ]