FROM ubuntu:24.04

ARG USER
ARG USER_ID=1000
ARG PASSWORD
#USER 1000:1000
USER 0:0

ARG HOME

RUN --network=host

# install must have
RUN apt-get update && apt-get install -y vim nano zsh curl git sudo

RUN userdel -r ubuntu
RUN useradd -m -o -u 1000 -U $USER -G sudo
RUN usermod -a -G sudo $USER
RUN echo "$USER:$PASSWORD" | chpasswd
RUN echo "$USER ALL=(ALL:ALL) NOPASSWD:ALL" > /etc/sudoers.d/user
RUN mkdir /gtrainer
RUN chown -R $USER:$USER /gtrainer
USER $USER
#RUN --mount=type=bind,source=$HOME/gtrainer,target=/gtrainer,rw

#RUN --mount=type=bind,source='./',target=/gtrainer,rw
VOLUME ["/gtrainer"]

ARG NODE_VERSION=22

# install nvm
RUN sudo -H -u $USER curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# set env
ENV NVM_DIR=/home/$USER/.nvm
ENV USER=$USER
# install node
RUN sudo -H -u $USER bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use $NODE_VERSIONnvm use $NODE_VERSION"
#RUN sudo -H -u $USER bash -c "nvm install $NODE_VERSION"
#RUN sudo -H -u $USER bash -c "nvm use $NODE_VERSION"

# set ENTRYPOINT for reloading nvm-environment
ENTRYPOINT /bin/bash -c "source $NVM_DIR/nvm.sh && cd /gtrainer && npm install && npm run build && npm run start:prod"

# set cmd to bash
CMD ["/bin/bash"]