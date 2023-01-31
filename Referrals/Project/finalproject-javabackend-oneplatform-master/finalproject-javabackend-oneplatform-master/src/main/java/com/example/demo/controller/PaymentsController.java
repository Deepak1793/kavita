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

import com.example.demo.model.Payments;
import com.example.demo.repository.PaymentsRepository;
import com.example.demo.service.PaymentsService;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"},  methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})

public class PaymentsController {
	
	@Autowired
	private PaymentsService payServ;
	
	@Autowired
	private PaymentsRepository payRepo;
	
	@PostMapping("/payments")
	public ResponseEntity<Payments> addAPayment(@RequestBody Payments payments){
		return new ResponseEntity<Payments>(payServ.addAPayment(payments),HttpStatus.CREATED);
	}
	
	@GetMapping("/payments/{paymentid}")
	public ResponseEntity<Payments> findAPayment(@PathVariable Integer paymentid){
		return new ResponseEntity<Payments>(payServ.findAPayment(paymentid),HttpStatus.OK);
	}
	
	@GetMapping("/payments")
	public ResponseEntity<List<Payments>> findAllPayments(){
		return new ResponseEntity<List<Payments>>(payServ.findAllPayments(),HttpStatus.OK);
	}
	
	@GetMapping("/payments/emailid")
	public ResponseEntity<List<Payments>> getPaymentbyEmailid(@RequestParam String emailid){
		return new ResponseEntity<List<Payments>>(payRepo.findByEmailid(emailid), HttpStatus.OK);
	}
	
	@PutMapping("/payments")
	public ResponseEntity<Payments> updateABankUser(@RequestBody Payments payments){
		return new ResponseEntity<Payments>(payServ.updateAnAccount(payments),HttpStatus.OK);
	}
	
	@DeleteMapping("/accounts/{paymentid}")
	public ResponseEntity<Payments> deleteABankUser(@PathVariable Integer paymentid){
		return new ResponseEntity<Payments>(payServ.deleteAnAccount(paymentid),HttpStatus.OK);
	
	}

	

}
