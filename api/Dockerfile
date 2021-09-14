# pull official base image
FROM node:13.12.0-alpine
# FROM node:12.18.1

# set working directory
WORKDIR ./api

# add app
COPY . ./

# install app dependencies
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

CMD ["npm", "i", "express"]

# start app
CMD ["npm", "start"]