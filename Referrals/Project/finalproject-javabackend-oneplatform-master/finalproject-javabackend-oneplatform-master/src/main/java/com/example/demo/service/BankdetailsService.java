package com.example.demo.service;

import java.util.List;


import com.example.demo.model.BankDetails;

public interface BankdetailsService {
	
	public BankDetails findABankUser(Long accNo);
	
	//Get All bankusers
	public List<BankDetails> findAllBankUsers();
	
	//Save A bankuser
	public BankDetails addABankUser(BankDetails bankuser);
	
	//Update a bankuser
	public BankDetails updateABankUser(BankDetails bankuser);
	
	//Delete a bankuser
	public BankDetails deleteABankUser(Long accNo);
	


}
