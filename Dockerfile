#etapa uno, build o construccion.
FROM node:20 AS build

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

#etapa dos, empaquetado
FROM nginx:alpine

COPY --from=build /usr/app/dist /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

EXPOSE 80
