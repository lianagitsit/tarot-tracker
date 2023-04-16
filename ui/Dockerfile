# Docker image which is used as the foundation to 
# build a custom image with this Dockerfile
FROM node:latest

# Directory within the Docker environment
WORKDIR /app

# Copies package.json and package-lock.json to Docker env
COPY package*.json ./

# Installs node packages
RUN npm install 

# Copies everything over to the Docker env
COPY . .

# Uses port the actual app is using
EXPOSE 3000

# Run the application
CMD ["npm", "start"]