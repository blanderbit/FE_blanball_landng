FROM node:18.9.0
ENV APP_PATH='/app'
RUN apt-get update && apt-get upgrade -y \
  && apt-get install --no-install-recommends -y
RUN apt-get install -y nginx
WORKDIR $APP_PATH
COPY . $APP_PATH
COPY deploy/nginx/default.conf /etc/nginx/conf.d/default.conf2