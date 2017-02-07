FROM node:6-onbuild
# Create app directory
RUN mkdir /app

RUN npm install mocha -g
RUN npm install nodemon -g

# Install app dependencies
ADD package.json /app/package.json
RUN npm install

RUN npm test

WORKDIR /app

CMD ["node", "app.js"]

ENV BRAND="Epic POS"
ENV PORT=3443
ENV NODE_ENV="development"
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
ENV MONGODB_URI="mongodb://172.17.0.1:27017/epic-pos"
