package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.BankTransactions;
import com.example.demo.repository.BankTransactionsRepository;
import com.example.demo.service.BankTransactionsService;


@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"}, methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, allowedHeaders = "*", allowCredentials = "true")

public class BankTransactionsController {
	
	@Autowired
	private BankTransactionsService bTServ;
	
	@Autowired
	private BankTransactionsRepository bTRepo;

	
	
	@GetMapping("/banktransactions")
	public ResponseEntity<List<BankTransactions>> getAllTransactions(){
		return new ResponseEntity<List<BankTransactions>>(bTServ.findAllTransactions(),HttpStatus.OK);
	}
	
	@PostMapping("/banktransactions")
	public ResponseEntity<BankTransactions> saveATransaction(@RequestBody BankTransactions banktransaction){
		return new ResponseEntity<BankTransactions>(bTServ.saveATransaction(banktransaction),HttpStatus.CREATED);
	}

	@GetMapping("/banktransactions/accno")
	public ResponseEntity<List<BankTransactions>> getTransactionbyAccNo(@RequestParam Long accno){
		return new ResponseEntity<List<BankTransactions>>(bTRepo.findByAccNo(accno), HttpStatus.OK);
	}

	@GetMapping("/banktransactions/emailid")
	public ResponseEntity<List<BankTransactions>> getTransactionbyAccNo(@RequestParam String emailid){
		return new ResponseEntity<List<BankTransactions>>(bTRepo.findByEmailid(emailid), HttpStatus.OK);
	}
	
}
