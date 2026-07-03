# Stage 1: Build the WAR
FROM maven:3.9.9-eclipse-temurin-21 AS build

WORKDIR /app

COPY . .

RUN mvn clean package

# Stage 2: Run on Tomcat
FROM tomcat:10.1-jdk21-temurin

COPY --from=build /app/target/college-event-website.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080

CMD ["catalina.sh", "run"]