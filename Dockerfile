#FROM node:latest as angular
#WORKDIR /app
#COPY package.json /app
#RUN npm install --silent
#COPY . .
#RUN npm run build


### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=build /usr/src/app/dist/rede-project /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t lets-code-rubens .
# docker run -p 8081:80 lets-code-rubens