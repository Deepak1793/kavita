package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.BankDetails;
import com.example.demo.repository.BankdetailsRepo;

@Service
public class BankdetailsServiceImpl implements BankdetailsService {
	
	@Autowired
	BankdetailsRepo bankuserRepo;

	@Override
	public BankDetails findABankUser(Long accNo) {
		
		return bankuserRepo.findById(accNo).get();
	}

	@Override
	public List<BankDetails> findAllBankUsers() {
		
		return bankuserRepo.findAll();
	}

	@Override
	public BankDetails addABankUser(BankDetails bankuser) {
		
		return bankuserRepo.save(bankuser);
	}

	@Override
	public BankDetails updateABankUser(BankDetails bankuser) {
		BankDetails updatedBankUser = null;
		Optional optional = bankuserRepo.findById(bankuser.getAccno());
		
		if(optional.isPresent()) {
			BankDetails getBankuser = bankuserRepo.findById(bankuser.getAccno()).get();
//			getBankuser.setBranch(bankuser.getBranch());
//			getBankuser.setCity(bankuser.getCity());
//			getBankuser.setFirstName(bankuser.getFirstName());
//			getBankuser.setLastName(bankuser.getLastName());
			updatedBankUser = bankuserRepo.save(getBankuser);
		}
		return updatedBankUser;
	}

	

	@Override
	public BankDetails deleteABankUser(Long accNo) {
		BankDetails bankUserToBeDeleted = null;
		Optional optional = bankuserRepo.findById(accNo);
		if (optional.isPresent()) {
			bankUserToBeDeleted = bankuserRepo.findById(accNo).get();
			bankuserRepo.deleteById(accNo);
		}
		return bankUserToBeDeleted;

	}
	
	

}
