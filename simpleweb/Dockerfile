#docker build . , where . is the build context include the docker file
#use an  exsiting docker image as a base
# alpine is the bare minimum image which has npm
FROM node:alpine

# working directory in the container. Any following command will be
# be executed relative to this path in the container.
WORKDIR /usr/app
# copy required local packge and index into container 
COPY ./ ./
# download and install a dependency
# excute some command while we are preparing our 
# custom image
# run commands to install additional programs
# apk - appache package manager 
RUN npm install
# tell the image what to do when it starts 
# as a container. Command to run at startup
CMD ["npm", "start"]

# C02XJ5YZJHD2:simpleweb deepak.tripathi$ docker build .
# [+] Building 2.2s (6/6) FINISHED                                                                                           
#  => [internal] load build definition from Dockerfile                                                                  0.1s
#  => => transferring dockerfile: 526B                                                                                  0.0s
#  => [internal] load .dockerignore                                                                                     0.0s
#  => => transferring context: 2B                                                                                       0.0s
#  => [internal] load metadata for docker.io/library/node:alpine                                                        0.0s
#  => [1/2] FROM docker.io/library/node:alpine                                                                          0.1s
#  => [2/2] RUN npm install                                                                                             1.9s
#  => exporting to image                                                                                                0.0s
#  => => exporting layers                                                                                               0.0s
#  => => writing image sha256:cdd9e68e75e349d838dc8edefbb61bc4905c924694d8207f8e159650f6a341d6
# => => writing image sha256:7fc57828e10272ad9b5fb8d86916f2f7e5f38d0b6e0a45  0.0s
#  => => naming to docker.io/deepakt/simpleweb                                0.0s

# Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
# C02XJ5YZJHD2:simpleweb deepak.tripathi$ docker run deepakt/simpleweb

# > @ start /
# > node index.js

# Listening on port 8080