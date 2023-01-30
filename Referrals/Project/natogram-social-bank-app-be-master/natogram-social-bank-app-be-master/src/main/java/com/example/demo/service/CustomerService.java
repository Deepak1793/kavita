package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Customer;

public interface CustomerService {
	
	//Get A Record
	public Customer findACustomer(String emailid);
	
	//Get All Customer
	public List<Customer> findAllCustomers();
	
	//Save A Customer
	public Customer addACustomer(Customer customer);
	
	//Update a Customer
	public Customer updateACustomer(Customer customer);
	
	//Delete a customer
	public Customer deleteACustomer(String email);
	
	
}
