package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cards;
import com.example.demo.repository.CardsRepo;
import com.example.demo.service.CardsService;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"},  methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class CardsController {
	
	@Autowired
	CardsService cServ;
	
	@Autowired
	CardsRepo cRepo;
	
	@PostMapping("/cards")
	public ResponseEntity<Cards> addACard(@RequestBody Cards cards){
		return new ResponseEntity<Cards>(cServ.addACard(cards),HttpStatus.CREATED);
	}
	
	@GetMapping("/cards/{cardnumber}")
	public ResponseEntity<Cards> findACard(@PathVariable Long cardnumber){
		return new ResponseEntity<Cards>(cServ.findACard(cardnumber),HttpStatus.OK);
	}
	
	@GetMapping("/cards")
	public ResponseEntity<List<Cards>> findAllCards(){
		return new ResponseEntity<List<Cards>>(cServ.findAllCards(),HttpStatus.OK);
	}
	
	@GetMapping("/cards/emailid")
	public ResponseEntity<List<Cards>> getCardByEmail(@RequestParam String emailid){
		return new ResponseEntity<List<Cards>>(cRepo.findByEmailid(emailid), HttpStatus.OK);
	}



	
	

}
