# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /natogram-social-bank-app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /natogram-social-bank-app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
#Expose Port
EXPOSE 3005
# start app
CMD ["npm", "start"]