FROM node:6.9.5
ADD . /app
WORKDIR /app

RUN npm install mocha -g
RUN npm install nodemon -g

RUN apk add --update python krb5 krb5-libs gcc make g++ krb5-dev

RUN npm install -g node-gyp

# Install app dependencies
ADD package.json /src/package.json
RUN npm install
RUN npm test

EXPOSE 3443

CMD ["node", "app.js"]

ENV BRAND="Epic POS"
ENV PORT=3443
ENV NODE_ENV="development"
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
ENV MONGODB_URI="mongodb://172.19.0.2:27017/epic-pos"