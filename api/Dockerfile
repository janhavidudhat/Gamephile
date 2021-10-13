# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR ./api

# add app
COPY . ./

# install app dependencies
RUN npm install --silent

# start app
CMD ["npm", "start"]

# CMD ["npx", "prisma", "generate"]