package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cards;
import com.example.demo.repository.CardsRepo;

@Service
public class CardsServiceImpl implements CardsService {
	
	@Autowired
	private CardsRepo cRepo;
	

	@Override
	public Cards findACard(Long creditCardNumber) {
		return cRepo.findById(creditCardNumber).get();
	}

	@Override
	public List<Cards> findAllCards() {
		return cRepo.findAll();
	}

	@Override
	public Cards addACard(Cards card) {
		return cRepo.save(card);
	}

	

	
}
