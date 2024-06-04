ARG NODE_VERSION=20.9.0

FROM node:${NODE_VERSION}

WORKDIR /app/sms

COPY package*.json .

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5500

CMD ["npm", "start"]