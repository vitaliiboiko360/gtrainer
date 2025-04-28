FROM ubuntu:24.04


ARG USER_ID=1000
ARG USER=user1
#USER 1000:1000
USER 0:0

ARG HOME

#RUN --mount=type=bind,source='./',target=/gtrainer,rw
VOLUME $HOME/gtrainer:/gtrainer

WORKDIR /gtrainer

RUN --network=host

RUN useradd -m -o -u 1000 -U $USER -G sudo

# install must have
RUN apt-get update && apt-get install -y vim nano zsh curl git sudo


ARG NODE_VERSION=22

# install nvm
RUN sudo -u $USER_ID curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# set env
ENV NVM_DIR=/home/$USER/.nvm
# install node
RUN sudo -u $USER_ID bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use $NODE_VERSION"

# set ENTRYPOINT for reloading nvm-environment
ENTRYPOINT ["bash", "-c", "source $NVM_DIR/nvm.sh && exec \"$@\"", "--"]

# set cmd to bash
#CMD ["/bin/bash"]