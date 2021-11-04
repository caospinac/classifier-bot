FROM node:lts-alpine3.14 as dependencies

WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn build

CMD ["yarn", "start"]
