package com.example.demo.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.model.Artist;
import com.example.demo.model.ArtistDetail;
import com.example.demo.model.Data;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ArtistService {
	
	 @Value("${lastfm.apikey}")
	 private String apiKey;
	
	public List<Artist> findTopArtist(){
		RestTemplate restTemplate = new RestTemplate();
		 String lastfmTopArtits = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key="+apiKey+"&format=json";
		 Data artists = restTemplate.getForObject(lastfmTopArtits, Data.class);
	     List<Artist> result = new ArrayList<Artist>();
	     List<Artist> recievedData = artists.getArtists().getArtist();
		 
	     for (Artist artist : recievedData) {
			artist.setLargeImage(artist.getImage().get(3).getUrl());
			result.add(artist);
		}
	     
		 return result;
	}
	
	/**
	 * Get Artist details from lastfm
	 * 
	 * @param artist's name
	 * @return artist detail
	 */
    public ArtistDetail getArtistDetail(String name){
    	 RestTemplate restTemplate = new RestTemplate();
		 String artistInfoUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+name+"&api_key="+apiKey+"&format=json";
		 JsonNode artistData = restTemplate.getForObject(artistInfoUrl, JsonNode.class);
		 JsonNode artist = artistData.get("artist");
		 //System.out.println(artist);
		 ObjectMapper mapper = new ObjectMapper();
		 ArtistDetail artitsDetail = new ArtistDetail();
		try {
			artitsDetail = mapper.readValue(artist.toString(), ArtistDetail.class);
			artitsDetail.setLargeImage(artitsDetail.getImage().get(2).getUrl());
			 artitsDetail.setBioContent(artist.get("bio").get("content").textValue());
			 artitsDetail.setBioSummary(artist.get("bio").get("summary").textValue());

		
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
		 return artitsDetail;
	}

}
