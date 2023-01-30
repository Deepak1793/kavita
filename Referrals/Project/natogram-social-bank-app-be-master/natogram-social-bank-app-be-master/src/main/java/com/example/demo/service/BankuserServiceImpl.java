package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Bankuser;
import com.example.demo.repository.BankuserRepository;

@Service
public class BankuserServiceImpl implements BankuserService {

	@Autowired
	private BankuserRepository bankuserRepo;
	
	@Override
	public Bankuser findABankUser(Long accNo) {
		return bankuserRepo.findById(accNo).get();
	}

	@Override
	public List<Bankuser> findAllBankUsers() {
		return bankuserRepo.findAll();
	}

	@Override
	public Bankuser addABankUser(Bankuser bankuser) {
		return bankuserRepo.save(bankuser);
	}

	@Override
	public Bankuser updateABankUser(Bankuser bankuser) {
		Bankuser updatedBankUser = null;
		Optional optional = bankuserRepo.findById(bankuser.getAccNo());
		
		if(optional.isPresent()) {
			Bankuser getBankuser = bankuserRepo.findById(bankuser.getAccNo()).get();
			getBankuser.setBranch(bankuser.getBranch());
			getBankuser.setCity(bankuser.getCity());
			getBankuser.setFirstName(bankuser.getFirstName());
			getBankuser.setLastName(bankuser.getLastName());
			updatedBankUser = bankuserRepo.save(getBankuser);
		}
		return updatedBankUser;
	}

	@Override
	public Bankuser deleteABankUser(Long accNo) {
		Bankuser bankUserToBeDeleted = null;
		Optional optional = bankuserRepo.findById(accNo);
		if (optional.isPresent()) {
			bankUserToBeDeleted = bankuserRepo.findById(accNo).get();
			bankuserRepo.deleteById(accNo);
		}
		return bankUserToBeDeleted;
	}

}
