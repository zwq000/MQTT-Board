FROM node:16 AS Build
WORKDIR /source
COPY . .
RUN yarn install && yarn run build

FROM nginx:1-alpine AS final
LABEL maintainer="zwq00000@hotmail.com"
EXPOSE 80
LABEL proj flespi-software/mqtt-board
LABEL version 2.6.4
WORKDIR /usr/share/nginx/html
COPY /source/dist/spa .

