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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.BankDetails;
import com.example.demo.repository.BankdetailsRepo;
import com.example.demo.service.BankdetailsService;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"}, methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, allowedHeaders = "*", allowCredentials = "true")

public class BankdetailsController {
	
	@Autowired
	BankdetailsService bUServ;
	
	@Autowired
	BankdetailsRepo bankdetailsrepo;
	
	@PostMapping("/BankDetails")
	public ResponseEntity<BankDetails> addABankUser(@RequestBody BankDetails bankuser){
		return new ResponseEntity<BankDetails>(bUServ.addABankUser(bankuser),HttpStatus.CREATED);
	}
	
	@GetMapping("/BankDetails/{accNo}")
	public ResponseEntity<BankDetails> findABankUser(@PathVariable Long accNo){
		return new ResponseEntity<BankDetails>(bUServ.findABankUser(accNo),HttpStatus.OK);
	}
	
	@GetMapping("/BankDetails")
	public ResponseEntity<List<BankDetails>> findAllBankUsers(){
		return new ResponseEntity<List<BankDetails>>(bUServ.findAllBankUsers(),HttpStatus.OK);
	}
	
	@PutMapping("/BankDetails")
	public ResponseEntity<BankDetails> updateABankUser(@RequestBody BankDetails bankuser){
		return new ResponseEntity<BankDetails>(bUServ.updateABankUser(bankuser),HttpStatus.OK);
	}
	
	@DeleteMapping("/BankDetails/{accNo}")
	public ResponseEntity<BankDetails> deleteABankUser(@PathVariable Long accNo){
		return new ResponseEntity<BankDetails>(bUServ.deleteABankUser(accNo),HttpStatus.OK);
	}
	
	@GetMapping("/BankDetails/emailid")
	public ResponseEntity<List<BankDetails>> getTransactionbyAccNo(@RequestParam String emailid){
		return new ResponseEntity<List<BankDetails>>(bankdetailsrepo.findByEmailid(emailid), HttpStatus.OK);
	}
	
	
	

}
