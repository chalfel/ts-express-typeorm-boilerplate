FROM node:lts

WORKDIR /home/node/app

COPY build .

ENV NODE_ENV=production

USER node

EXPOSE 3333

CMD [ "node", "dist/src/main/index.js" ]
