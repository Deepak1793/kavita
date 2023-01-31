## Set Up 

1. Clone the repo from GIT LAB

 ![GitHub repo] https://gitlab.stackroute.in/capstone-team-2/music-service.git

2. mvn install

3. Install Mongo and mysql db

4. run the all services as java application


## The following apis would be available for your use -
Login Service:
-------------
* To Register user - POST - http://localhost:8084/api/v1/auth/register - 
	Input data - 
	{"contactNumber": "string",
	"email": "string",
	"firstName": "string",
	"gender": "string",
	"lastName": "string",
	"password": "string",
	"userId": "string"}
* To Login user - POST - http://localhost:8084/api/v1/auth/signin 
	Input data - 
	{
	"email": "string",
	"password": "string"
	}

* To Resetpassword - POST - localhost:8084/api/v1/auth/resetpassword -
	Input data - 
	{
	"email": "string",
	"password": "string"
	}

Search Service:
-------------
* Get Tracks    -http://localhost:8095/api/v1/music/album/{albumName}
* Search tracks -http://localhost:8095/api/v1/music/search/{searchText}
* SearchByArtist-http://localhost:8095/api/v1/music/searchArtist/{searchArtist}
* SearchByTrack -http://localhost:8095/api/v1/music/searchTrack/{searchTrack}
* GetTopArtists -http://localhost:8095/api/v1/music/top/{type}

## The Napster API to be used as data source in the search service:
- 
*Search by artist -http://api.napster.com/v2.2/search?type=artist&apikey=<apikey>
*Search by track  -http://api.napster.com/v2.2/search?type=track&apikey=<apikey>
*Search           -http://api.napster.com/v2.2/search?apikey=<apikey>
*Top tracks       -http://api.napster.com/v2.2/track/top?apikey=<apikey>
*Top Album-		  -http://api.napster.com/v2.2/album/top?apikey=<apikey>
*GetTracks		  -http://api.napster.com/v2.2/albums/<albumid>?apikey=<apikey>

## To register for an API key, follow these steps:
- You need to signup for Napster API (https://developer.napster.com/).
- After registration, API key is generated for you.
- Get the api key from napster and then place it in the application.properties of Search service under the property name - com.bosch.search.apiKey.


Favourites Service:
-------------
1.GetFavouriteByUserId-GET - http://localhost:8083/api/v1/favourites/{userId}
2.Add Favourites -POST - http://localhost:8083/api/v1/favourites/add 
	Input data: 
	{
	"albumName": "string",
	"artistName": "string",
	"imageURL": "string",
	"name": "string",
	"previewURL": "string",
	"trackId": "string",
	"userId": "string"
	}
3.DeleteFavourite -DELETE - http://localhost:8083/api/v1/favourites/{favId} 


