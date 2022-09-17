#docker build . , where . is the build context include the docker file
#use an  exsiting docker image as a base
FROM alpine
# download and install a dependency
# excute some command while we are preparing our 
# custom image
# run commands to install additional programs
# apk - appache package manager 
RUN apk add --update redis
# tell the image what to do when it starts 
# as a container. Command to run at startup
CMD ["redis-server"] 