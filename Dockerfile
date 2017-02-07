FROM node:6-onbuild
# Create app directory
RUN mkdir /src

RUN npm install mocha -g
RUN npm install nodemon -g

# Install app dependencies
ADD package.json package.json
RUN npm install

RUN npm test

WORKDIR /src

ENV BRAND="Epic POS"
ENV PORT=3443
ENV NODE_ENV="development"
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
ENV MONGODB_URI="mongodb://0.0.0.0:27017/epic-pos"
