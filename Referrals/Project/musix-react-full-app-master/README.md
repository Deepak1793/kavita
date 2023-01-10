 <h1 align="center"> Musix React App</h1>


 <p align="center">
  
Who doesn't appreciate good music?

- Musix-App is a platform where you can browse nonstop tunes around the world. :heart_eyes: The platform is very easy to use for people from all walks of life and of any age. They can search music by album/ by artist  :partying_face: :gift_heart: 

- Login/registration is required only if the you want to add and see recommendations or add songs to favorites 
  </p>



---

This project was generated with React cli and backend side springboot with jwt token is used. We used Lastfm API to fetch the data on service layer 

Source:lastfmapi

Objective:
1. Enabling the user to play music artist-wise.
2. Enabling the user to save their favourites by signing in.
3. User can also recommend songs and access the list of songs reccomended by others by logging in.
4. User can access the video links of music from different genres on artist profile.
5. User can search the artist and play the song without login also.
5. User can logout.

RoadMap:
1. login-->if register ->All Artists/
2. Register ->Login--> All Artists/
3. Play songs by artist 
4. Add favourites/recommendations (for registered users).

Actions:
1. Fork this repository.
2. Clone the repository and cd into it
3. Install dependencies through npm install in Angular Musix_App.
4. Run the musix_register_login as Spring boot App on the server port 8282 and configure the datasource with your mysql user credentials(in Application Properties}.
5. Run the Musix_Favourite_Recommend as Spring boot App on the tomcat port 9093 and configure your mongodb through application properties file.
6. Docker containerization and start docker container
7. Run the frontend npm run start which shall run on port:3000.


Prerequisites:
-JDK 1.8 or later
-Maven 3 or later
-MySQL 5.6 or later
-MongoDB 4.2
-Docker
 
Stack:
-SpringBoot
-JWT
-Swagger
-Maven
-MySQL
-MongoDB
-Docker
- Logger

Know your server:
1. To register the user- post- http://localhost:8282/register- Expecting data-{ name,email, password, image }
2. To authenticate User - post- http://localhost:8282/login -Expecting data-{email , password}
3. To get specific user details- get- http://localhost:8282/getuserdetails/{userId}- expecting header - { 'Authorization', Bearer ${token} }.
4. To add favourites- post- http://localhost:9093/addtofav
5. To get favourites- get -http://localhost:9093/getallfav(Username)- expecting header - { 'Authorization', Bearer ${token} }.
6. To add recommendations- post -http://localhost:9093/addtorecommend-
7. To get all recommendations- get -http://localhost:9093/getallrecommend- expecting header - { 'Authorization', Bearer ${token} }.

Steps to Setup the Spring Boot Back end app:
1.Clone the application
2.Create MySQL database.
3.Change MySQL username and password as per your MySQL installation.
-open src/main/resources/application.properties file.
-change spring.datasource.username and spring.datasource.password properties as per your mysql installation.
4.Run the app.
-run as spring Boot App/ command: mvn spring-boot:run.
or Docker as docker compose up command or docker start containr id

Steps to be followed in running React:
1.npm install, npm run build, npm start.
2. For unit test cases testing: npm run test via Karma.
3. For e2e test cases testing: npm run serve, npm run e2e via Protractor.

features used for UI display:
1. React Material
2. Responsive Design, HTML 5.1, CSS
3. React Toastify

For further help:
1. To get more help on the React CLI use ng help or go check out the Angular CLI README.





