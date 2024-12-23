FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build --production

EXPOSE 3000

CMD [ "yarn", "start" ]

