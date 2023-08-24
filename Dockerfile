FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
COPY execute.js /app/
CMD ["node", "server.js"]