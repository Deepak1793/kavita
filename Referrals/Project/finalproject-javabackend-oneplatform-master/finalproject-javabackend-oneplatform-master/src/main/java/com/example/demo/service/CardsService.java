package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Cards;


public interface CardsService {
	
	public Cards findACard(Long creditCardNumber);  //Find a card
	public List<Cards> findAllCards(); //Find all cards
	public Cards addACard (Cards card); //Save a card


}
