package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Customer;
import com.example.demo.model.JWTRequest;
import com.example.demo.model.JWTResponse;
import com.example.demo.service.CustomerService;
import com.example.demo.service.MyUserDetailService;
import com.example.demo.utility.JWTUtility;


@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
public class CustomerController {

	@Autowired
	private CustomerService CustomerServ;
	
	@Autowired
	AuthenticationManager manager;
	
	@Autowired
	JWTUtility jwtUtitlity;
	
	@Autowired
	MyUserDetailService userDetailService;
	
	@PostMapping("/customer")
	public ResponseEntity<Customer> addACustomer(@RequestBody Customer customer){
		return new ResponseEntity<Customer>(CustomerServ.addACustomer(customer),HttpStatus.CREATED); 
	}
	
	@GetMapping("/customer/{emailid}")
	public ResponseEntity<Customer> findACustomer(@PathVariable String emailid){
		return new ResponseEntity<Customer>(CustomerServ.findACustomer(emailid),HttpStatus.OK);
	}
	
	@GetMapping("/customers")
	public ResponseEntity<List<Customer>> findAllUsers(){
		return new ResponseEntity<List<Customer>>(CustomerServ.findAllCustomers(),HttpStatus.OK);
	}
	
	@PutMapping("/customer")
	public ResponseEntity<Customer> updateACustomer(@RequestBody Customer customer){
		return new ResponseEntity<Customer>(CustomerServ.updateACustomer(customer), HttpStatus.OK);
	}
	
	@DeleteMapping("/customer/{emailid}")
	public ResponseEntity<Customer> deleteACustomer(@PathVariable String emailid){
		return new ResponseEntity<Customer>(CustomerServ.deleteACustomer(emailid), HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public JWTResponse login(@RequestBody JWTRequest request) throws Exception {
		
		try {
			
			manager.authenticate(
					new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())	
					);	
		}
		catch( BadCredentialsException e ){
			throw new Exception("Wrong_Username_or_Password");
		}		
		UserDetails userdetail = userDetailService.loadUserByUsername(request.getEmail());		
		String generateToken = jwtUtitlity.generateToken(userdetail);
		return new JWTResponse(generateToken);
	}
	
}
