#!/bin/bash
docker run -it --name account-history-service -p 8010:8010 \
  -e DB_HOST="172.17.0.1" -e KAFKA_HOST="172.17.0.1" -e EUREKA_HOST="172.17.0.1" \
  -e AUTH_TOKEN_URL="http://172.17.0.1:9000/oauth/check_token" -e USER_INFO_URL="http://172.17.0.1:9000/user" \
  -d account-history-service
