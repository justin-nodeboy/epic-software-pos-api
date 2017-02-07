FROM ubuntu:16.04

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update
RUN apt-get -qq update
RUN curl -sL https://deb.nodesource.com/setup_6.9.5 | sudo -E bash -
RUN apt-get install -y nodejs npm

RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

ADD . /app
WORKDIR /app

RUN npm install mocha -g
RUN npm install nodemon -g

# Install app dependencies
ADD package.json /src/package.json
RUN npm install
RUN npm test



CMD ["node", "app.js"]

ENV BRAND="Epic POS"
ENV PORT=3443
ENV NODE_ENV="development"
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
ENV MONGODB_URI="mongodb://172.19.0.2:27017/epic-pos"