package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Bankuser;

public interface BankuserService {

		//Get A bankuser
		public Bankuser findABankUser(Long accNo);
		
		//Get All bankusers
		public List<Bankuser> findAllBankUsers();
		
		//Save A bankuser
		public Bankuser addABankUser(Bankuser bankuser);
		
		//Update a bankuser
		public Bankuser updateABankUser(Bankuser bankuser);
		
		//Delete a bankuser
		public Bankuser deleteABankUser(Long accNo);
		
	
}
