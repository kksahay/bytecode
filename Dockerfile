FROM node:20-alpine
RUN apk update && apk add --no-cache g++
WORKDIR /app
COPY package.json .env /app/
RUN npm install
COPY execute.js /app/
CMD ["node", "server.js"]