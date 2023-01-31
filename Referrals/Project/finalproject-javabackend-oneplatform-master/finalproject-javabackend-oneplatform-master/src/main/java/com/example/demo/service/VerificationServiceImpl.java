package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Verification;
import com.example.demo.repository.VerificationRepo;

@Service
public class VerificationServiceImpl implements VerificationService {
	
	@Autowired
	VerificationRepo verifyrepo;

	@Override
	public Verification findAPin(String emailid) {
		return verifyrepo.findById(emailid).get();
	}

	@Override
	public List<Verification> findAllPins() {
		return verifyrepo.findAll();
	}

	@Override
	public Verification addAPin(Verification verification) {
		return verifyrepo.save(verification);
	}

}
