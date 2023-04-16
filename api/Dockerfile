FROM node:latest

WORKDIR /app

# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH


COPY package*.json ./
RUN npm install -g nodemon

RUN npm install 

# RUN npm install -g nodemon

COPY . .

# RUN npx prisma generate

EXPOSE 8080

CMD ["npm", "start"]