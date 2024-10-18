ARG IMAGEN
ARG ENDPOINT
#etapa uno, build o construccion.
FROM node:20 AS build

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

#etapa dos, empaquetado
FROM nginx:$IMAGEN

COPY --from=build /usr/app/dist /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

ENV VITE_URL_ENDPOINT_BACKEND=$ENDPOINT

EXPOSE 80
