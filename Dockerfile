ARG NODE_VERSION=18-alpine
FROM node:$NODE_VERSION as BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY ./ ./
RUN npm run generate
FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=BUILD_IMAGE /app/dist /usr/share/nginx/html
COPY --from=BUILD_IMAGE /app/deploy/nginx/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]