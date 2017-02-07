FROM node:7.5.0-alpine
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