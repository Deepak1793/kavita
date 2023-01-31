package com.example.demo.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.BankTransactions;
import com.example.demo.repository.BankTransactionsRepository;

@Service
public class BankTransactionsServiceImpl implements BankTransactionsService  {
	
	@Autowired
	private BankTransactionsRepository bTRepo;
	
	@Override
	public List<BankTransactions> findAllTransactions() {
		
		return bTRepo.findAll();
	}

	@Override
	public BankTransactions saveATransaction(BankTransactions bankTransaction) {
		return bTRepo.save(bankTransaction);
	}


	

}
