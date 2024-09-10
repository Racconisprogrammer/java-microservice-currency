#!/bin/bash
docker run -it --name auth-service -p 9000:9000 \
    -e EUREKA_HOST="172.17.0.1" \
    -d auth-service
