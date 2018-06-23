FROM node:10.5-alpine
LABEL maintainer="docker@lagden.in"

RUN apk add --no-cache python make g++ libc6-compat

ENV APP=/home/node/app

RUN mkdir -p $APP
COPY . $APP

WORKDIR $APP
RUN npm i --progress=false --production
RUN npm i wscat -g

EXPOSE 3000
