package com.example.demo.service;

import java.util.List;

import com.example.demo.model.BankTransactions;

public interface BankTransactionsService {

	//Get All Transactions
		public List<BankTransactions> findAllTransactions();
		
		//Save A Transaction
		public BankTransactions saveATransaction(BankTransactions bankTransaction);


}
