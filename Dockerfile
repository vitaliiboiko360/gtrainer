FROM ubuntu:24.04

USER 1000:1000

#RUN --mount=type=bind,source='./',target=/gtrainer,rw
VOLUME $HOME/gtrainer:/gtrainer

WORKDIR /gtrainer

RUN --network=host

ARG NODE_VERSION=22

# install curl
RUN apt update && apt install curl -y

# install nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# set env
ENV NVM_DIR=/root/.nvm

# install node
RUN bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use $NODE_VERSION"

# set ENTRYPOINT for reloading nvm-environment
ENTRYPOINT ["bash", "-c", "source $NVM_DIR/nvm.sh && exec \"$@\"", "--"]

# set cmd to bash
#CMD ["/bin/bash"]