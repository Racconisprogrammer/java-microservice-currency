FROM adoptopenjdk/openjdk11:jdk-11.0.8_10-alpine
ADD target/*.jar app.jar

ENV EUREKA_HOST=localhost
ENV PROCESSING_URL="http://localhost:8090"
ENV CURRENCY_URL="http://localhost:8085"
ENV AUTH_URL="http://localhost:9000"
ENV HISTORY_URL="http://localhost:8010"

EXPOSE 8080

ENTRYPOINT [ "sh", "-c", "java -jar /app.jar \
    --cloud.eureka-host=$EUREKA_HOST \
    --cloud.processing-service-url=$PROCESSING_URL \
    --cloud.currency-service-url=$CURRENCY_URL \
    --cloud.history-service-url=$HISTORY_URL \
    --cloud.auth-service-url=$AUTH_URL \
    "]
