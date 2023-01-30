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

import com.example.demo.model.Bankuser;
import com.example.demo.service.BankuserService;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"}, methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, allowedHeaders = "*", allowCredentials = "true")
public class BankUserController {

	@Autowired
	private BankuserService bUServ;
	
	@PostMapping("/bankuser")
	public ResponseEntity<Bankuser> addABankUser(@RequestBody Bankuser bankuser){
		return new ResponseEntity<Bankuser>(bUServ.addABankUser(bankuser),HttpStatus.CREATED);
	}
	
	@GetMapping("/bankuser/{accNo}")
	public ResponseEntity<Bankuser> findABankUser(@PathVariable Long accNo){
		return new ResponseEntity<Bankuser>(bUServ.findABankUser(accNo),HttpStatus.OK);
	}
	
	@GetMapping("/bankusers")
	public ResponseEntity<List<Bankuser>> findAllBankUsers(){
		return new ResponseEntity<List<Bankuser>>(bUServ.findAllBankUsers(),HttpStatus.OK);
	}
	
	@PutMapping("/bankuser")
	public ResponseEntity<Bankuser> updateABankUser(@RequestBody Bankuser bankuser){
		return new ResponseEntity<Bankuser>(bUServ.updateABankUser(bankuser),HttpStatus.OK);
	}
	
	@DeleteMapping("/bankuser/{accNo}")
	public ResponseEntity<Bankuser> deleteABankUser(@PathVariable Long accNo){
		return new ResponseEntity<Bankuser>(bUServ.deleteABankUser(accNo),HttpStatus.OK);
	}
	
}
