FROM node:16.13-alpine

COPY app.js /usr/src/app/app.js

WORKDIR /usr/src/app

CMD [ "node", "app.js" ]