FROM node:14-alpine

# project workind directory
ENV APP_PATH='/app'

COPY ./package*.json $APP_PATH/

# set project workind directory
WORKDIR $APP_PATH

RUN npm install && npm cache clean --force

COPY . .

ENV PATH ./node_modules/.bin/:$PATH