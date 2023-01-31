package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Payments;

public interface PaymentsService {
	
	public Payments findAPayment (Integer paymentid);  //Find a payment
	public List<Payments> findAllPayments(); //Find all payments
	public Payments addAPayment (Payments payment); //Save a payment
	public Payments updateAnAccount(Payments payment); //Update Account
	public Payments deleteAnAccount(Integer paymentid );  //Delete Account


}
