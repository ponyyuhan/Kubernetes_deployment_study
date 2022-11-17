FROM node:11
MAINTAINER Yuhan Ma


ADD . /app


WORKDIR /app


RUN npm install


CMD node app.js
