FROM node:11
MAINTAINER easydoc.net


ADD . /app


WORKDIR /app


RUN npm install


CMD node app.js
