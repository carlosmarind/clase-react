#etapa uno, build o construccion.
FROM node:22 AS build

WORKDIR /usr/app
COPY . .
RUN npm ci 
RUN npm run build
#etapa dos, empaquetado
FROM nginx:alpine-slim

COPY --from=build /usr/app/dist /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
EXPOSE 80