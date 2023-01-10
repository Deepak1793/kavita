FROM java:8-jre
WORKDIR usr/src
ENV MONGO_DATABASE=songfavlist
ENV MONGO_URI=mongodb://localhost:27017/songfavlist
ADD ./target/Musix_Favourite_Recommend-0.0.1-SNAPSHOT.jar /usr/src/Musix_Favourite_Recommend-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","Musix_Favourite_Recommend-0.0.1-SNAPSHOT.jar"]