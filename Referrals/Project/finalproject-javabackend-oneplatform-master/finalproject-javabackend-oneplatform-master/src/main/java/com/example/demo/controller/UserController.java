package com.example.demo.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.demo.exception.UserAlreadyExistException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.JWTRequest;
import com.example.demo.model.JWTResponse;

import com.example.demo.model.Users;
import com.example.demo.service.MyUserDetailService;
import com.example.demo.service.NetflixUserService;
import com.example.demo.util.JWTUtility;


@RestController

@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"}, methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, allowedHeaders = "*", allowCredentials = "true")

public class UserController {
	
	@Autowired
	NetflixUserService netflixServ;
	
	@Autowired
	AuthenticationManager manager;
	
	@Autowired
	MyUserDetailService userDetailService;
	
	@Autowired
	JWTUtility jwtUtitlity;


	
	@PostMapping("/users")
	public ResponseEntity<Users> resgisterUser(@RequestBody Users Users) throws UserAlreadyExistException{
		return new ResponseEntity<Users>(netflixServ.registerUser(Users),HttpStatus.CREATED);
	}
	
	@GetMapping("/users")
	public ResponseEntity<List<Users>> getAllUser(){
		return new ResponseEntity<List<Users>>(netflixServ.getAllUser(), HttpStatus.OK);
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<Users> findAUserbyId(@PathVariable String id) throws UserNotFoundException{
		return new ResponseEntity<Users>(netflixServ.findUserbyId(id), HttpStatus.OK);
	}
	
	@DeleteMapping("/users/{username}")
	public ResponseEntity<Users> deleteAUserbyId(@PathVariable String username){
		return new ResponseEntity<Users>(netflixServ.deleteAUser(username),HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/users")
	public ResponseEntity<Users> updateAUser(@RequestBody Users updatedNetflixUser){
		return new ResponseEntity<Users>(netflixServ.updateAUser(updatedNetflixUser),HttpStatus.CREATED);
	}
	
	
	@PostMapping("/login")
	public JWTResponse login(@RequestBody JWTRequest request) throws Exception {
		
try {
			
			manager.authenticate(
					new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())	
					);
			
		}
		catch( BadCredentialsException e ){
			throw new Exception("Wrong_Username_or_Password");
		}
		
		UserDetails userdetail = userDetailService.loadUserByUsername(request.getUsername());
		
		String generateToken = jwtUtitlity.generateToken(userdetail);
		return new JWTResponse(generateToken);

		
	}
	
	
	
	
}
