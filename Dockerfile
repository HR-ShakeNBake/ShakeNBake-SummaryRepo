FROM node:10.13.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 4000

CMD [ "npm", "start" ]