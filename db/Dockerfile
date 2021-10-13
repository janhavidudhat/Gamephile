# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR ./db

# add app
COPY . ./

# install app dependencies
RUN npm install --silent

# setup database
CMD ["npx", "prisma", "db", "push", "--accept-data-loss"]

# CMD ["npm", "run", "setup"]
