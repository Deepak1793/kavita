package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Verification;
import com.example.demo.service.VerificationService;

@RestController

@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"}, methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, allowedHeaders = "*", allowCredentials = "true")
public class VerificationController {
	
	@Autowired
	VerificationService verifyserv;
	
	@PostMapping("/verification")
	public ResponseEntity<Verification> addAPayment(@RequestBody Verification Verification){
		return new ResponseEntity<Verification>(verifyserv.addAPin(Verification),HttpStatus.CREATED);
	}
	
	@GetMapping("/verification/{emailid}")
	public ResponseEntity<Verification> findAPayment(@PathVariable String emailid){
		return new ResponseEntity<Verification>(verifyserv.findAPin(emailid),HttpStatus.OK);
	}
	
	@GetMapping("/verification")
	public ResponseEntity<List<Verification>> findAllPayments(){
		return new ResponseEntity<List<Verification>>(verifyserv.findAllPins(),HttpStatus.OK);
	}

}
