FROM node:10-alpine

# Create app directory
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production
RUN npm install --no-cache

# Bundle app source
COPY . .

EXPOSE __port__

CMD [ "npm", "start" ]
