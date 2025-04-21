FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .


EXPOSE 5173
EXPOSE 5174

CMD ["npm", "run", "dev", "--", "--host"]
