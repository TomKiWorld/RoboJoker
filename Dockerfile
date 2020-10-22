FROM node:current

ENV VERSION=v15.0.0 NPM_VERSION=7 YARN_VERSION=v1.22.10

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
     
FROM nginx

EXPOSE 80

COPY --from=0 /app/build /usr/share/nginx/html
