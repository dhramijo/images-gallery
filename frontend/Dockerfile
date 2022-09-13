# Image name
FROM node:15.14-alpine

# image directory in docker container
WORKDIR /app

# port
EXPOSE 3000

# required files into image
COPY package.json package-lock.json ./

# packages
RUN npm install --silent

# all remaining application files into working directory
COPY . ./

# execution command to run the app
CMD ["npm", "start"]