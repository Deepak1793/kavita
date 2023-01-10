FROM java:8-jre
WORKDIR usr/src
ENV MYSQL_USERNAME=userroot
ENV MYSQL_PASSWORD=root123
ENV MYSQL_URL=jdbc:mysql://localhost:3306/musixapp?useSSL=false&allowPublicKeyRetrieval=true
ADD ./target/Musix_Register_Login-0.0.1-SNAPSHOT.jar /usr/src/Musix_Register_Login-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","Musix_Register_Login-0.0.1-SNAPSHOT.jar"]