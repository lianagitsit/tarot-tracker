FROM node:latest

WORKDIR /app

# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH


COPY package*.json ./
RUN npm install -g nodemon

RUN npm install 

# RUN npm install -g nodemon

COPY . .
# does this need to be run from /app/prisma?
RUN npx prisma generate
RUN npx prisma migrate dev

EXPOSE 8080

CMD ["npm", "start"]