package com.example.demo.service;

import java.util.List;


import com.example.demo.model.Verification;

public interface VerificationService {
	
	public Verification findAPin (String emailid);  //Find a payment
	public List<Verification> findAllPins(); //Find all payments
	public Verification addAPin (Verification verification); //Save a payment

}
