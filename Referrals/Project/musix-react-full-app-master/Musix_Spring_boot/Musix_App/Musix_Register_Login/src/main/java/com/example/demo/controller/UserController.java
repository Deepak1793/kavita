package com.example.demo.controller;

import java.util.Date;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import com.example.demo.exception.*;
import com.example.demo.model.*;
import com.example.demo.service.*;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class UserController {
	
    private UserService userService;

    @Autowired 
    private WebClient.Builder webClientBuilder;
    
    @Autowired
    public UserController(UserService userService) {
        super();
        this.userService = userService;
    }

    @PostMapping("/register")
    @CrossOrigin(origins="*")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        ResponseEntity<?> response = null;

        try {
            userService.registerUser(user);
            response = new
                    ResponseEntity<String>("user created",HttpStatus.CREATED);
        } catch (UserExistsException e) {
            response = new
                    ResponseEntity<String>("error",HttpStatus.CONFLICT);
            e.printStackTrace();
        } catch (Exception e) {
            response = new
                    ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
            e.printStackTrace();
        }
        return response;
    }
    @GetMapping("/users")
	public  ResponseEntity<?> getAllUser(){
		List<User> userList = userService.getAllUser();
		ResponseEntity<?>entity= null;
		try{
			entity=new ResponseEntity<List<User>>(userList,HttpStatus.OK);
		}catch(Exception e){
			entity= new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		return  entity;
	}
    @PostMapping("/login")
    @CrossOrigin(origins="*")
    public ResponseEntity<?> login(@RequestBody User user,HttpSession session)
            throws UserNotFoundException {

    	ResponseEntity<?> entity = null;
		String  token = ""; 
		User result; 
		try {
			result = userService.validateUser(user);
			session.setAttribute("userName", user.getUserName());
			token = getToken(user.getUserName());
			entity = new ResponseEntity<String>(token,HttpStatus.OK);
		} catch (UserNotFoundException e) { 
			entity = new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}

		return entity;
    }
    
    private String getToken(String userName) {
    	long expiryTime = System.currentTimeMillis()+(1000*60*5);
		String token = Jwts.builder()
				.setSubject(userName)
				.setIssuedAt(new Date())
				.setExpiration(new Date(expiryTime)).signWith(SignatureAlgorithm.HS256, "success").compact();
		return token;
	}

    
    @GetMapping("/logout")
    @CrossOrigin(origins="*")
	public ResponseEntity<?> logout(HttpSession session){
		ResponseEntity<?> entity = null;
		if(session!=null && session.getAttribute("userName")!=null) {
			session.invalidate();
			entity = new ResponseEntity<String>("Logged out Successfully",HttpStatus.OK);	
		}
		else {
			entity = new ResponseEntity<String>("Not loggedin Logout Failure",HttpStatus.BAD_REQUEST);
		}
		return entity;
	}
   
    
}