FROM node:lts

WORKDIR /home/node/app

ADD . .

ENV NODE_ENV=production

RUN yarn \
    && yarn build

USER node

EXPOSE 3333

CMD [ "node", "build/index.js" ]
