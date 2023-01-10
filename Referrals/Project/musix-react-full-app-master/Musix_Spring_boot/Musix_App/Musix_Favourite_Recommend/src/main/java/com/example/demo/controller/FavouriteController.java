package com.example.demo.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Favourite;
import com.example.demo.repository.FavouriteRepository;

@CrossOrigin(origins="*",allowedHeaders="*")
@RestController
public class FavouriteController {
	static int count=0;
	
	
	@Autowired
	private FavouriteRepository repository;
	
	
	@PostMapping("/addtofav")
	@CrossOrigin(origins="*")
	public String addtoFavourite(@RequestBody Favourite favourite)
	{
		count=repository.findAll().size()+1;
		favourite.setId(count);
		
		repository.save(favourite);
		
		return "Added in Favourite";
	}
	
	@GetMapping("/getallfav")
	@CrossOrigin(origins="*")
	public List<Favourite> getFavourite()
	{
		return repository.findAll();
	}
	
	@DeleteMapping("/deletefav/{id}")
	@CrossOrigin(origins="*")
	public ResponseEntity<?> deleteFavourite(@PathVariable Integer id)
	{
		ResponseEntity<?> entity = null;
		repository.deleteById(id);
		entity= new ResponseEntity<String>("deleted successfully",HttpStatus.OK);
		return entity;
	}
	
	@GetMapping("/getfavlist/{userName}")
	@CrossOrigin(origins="*")
	public ResponseEntity<?>getfavByUserName(@PathVariable String userName){
		
		List<Favourite>favList = repository.findAll();
		System.out.println("favList==========="+favList);
		System.out.println("userName"+userName);
		List<Favourite> listBasedOnUser = favList.stream().filter(fav->fav.getUser().equals(userName)).collect(Collectors.toList());
		ResponseEntity<?> entity = null;
		if(listBasedOnUser.size()!=0) {
			entity= new ResponseEntity<List<Favourite>>(listBasedOnUser,HttpStatus.OK);
		}
		else {
			entity= new ResponseEntity<String>("Playlist List is empty",HttpStatus.NO_CONTENT);
		}
		return entity;
	}
	

}
