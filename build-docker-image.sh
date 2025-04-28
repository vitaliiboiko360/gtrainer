#!/bin/bash
docker buildx build --network=host --build-arg HOME=$HOME --build-arg  PASSWORD=$PASS --build-arg USER=$USER .
docker run -v $PWD:/gtrainer `docker image ls | sed -n '2{p;q}' | awk '{print $3}'` 