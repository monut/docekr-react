FROM node:alpine

# working directory in the container. Any following command will be
# be executed relative to this path in the container.
WORKDIR /app
# copy required local packge and index into container 
COPY package.json .

# download and install a dependency
# excute some command while we are preparing our 
# custom image
# run commands to install additional programs
# apk - appache package manager 
RUN npm install

COPY ./ ./
# tell the image what to do when it starts 
# as a container. Command to run at startup
CMD ["npm", "start"]