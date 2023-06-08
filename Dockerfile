FROM node:19.7-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . ./
RUN yarn build

EXPOSE 3000
RUN yarn global add serve
CMD ["serve", "-s", "build"]
