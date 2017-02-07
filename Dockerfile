FROM ubuntu:xenial

RUN apt-get -qq update
RUN apt -qqy upgrade
RUN apt-get install -y xvfb chromium-chromedriver chromium-browser curl build-essential xvfb default-jre kmod git
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

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