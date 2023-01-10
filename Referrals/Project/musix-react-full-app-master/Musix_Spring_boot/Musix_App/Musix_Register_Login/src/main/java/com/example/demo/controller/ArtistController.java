package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ArtistNotFoundException;
import com.example.demo.model.Artist;
import com.example.demo.model.ArtistDetail;
import com.example.demo.model.User;
import com.example.demo.service.ArtistService;

@RestController
public class ArtistController {

  private ArtistService service;
  
  @Autowired
  public ArtistController(ArtistService service) {
	  super();
	  this.service= service;
  }
  

  
  @GetMapping("/topartists")
  @CrossOrigin(origins="*")
  public  ResponseEntity<?> getAllArtists(){
		List<Artist> ArtistList = service.findTopArtist();
		ResponseEntity<?>entity= null;
		try{
			entity=new ResponseEntity<List<Artist>>(ArtistList,HttpStatus.OK);
		}catch(Exception e){
			entity= new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		return  entity;
	}
  
  @GetMapping(value = "/artists/{name}")
  @CrossOrigin(origins="*")
  public ResponseEntity<?> getByIdHandler(@PathVariable String name) throws ArtistNotFoundException {
  	ArtistDetail artObj = service.getArtistDetail(name);

	  if (artObj != null) {
	      return new ResponseEntity<>(artObj, HttpStatus.OK);
	  }

	  return new ResponseEntity<String>("No such artist",HttpStatus.NOT_FOUND);
  }


}
