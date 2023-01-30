package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepo;
	
	@Override
	public Customer findACustomer(String emailid) {
		return customerRepo.findById(emailid).get();
	}

	@Override
	public List<Customer> findAllCustomers() {
		return customerRepo.findAll();
	}

	@Override
	public Customer addACustomer(Customer customer) {
		return customerRepo.save(customer);
	}

	@Override
	public Customer updateACustomer(Customer customer) {
		Customer updatedCustomer = null;
		Optional optional = customerRepo.findById(customer.getEmailid());
		
		if(optional.isPresent()) {
			//from db
			Customer getCustomer = customerRepo.findById(customer.getEmailid()).get();
			getCustomer.setAccountno(customer.getAccountno());
			getCustomer.setMobileno(customer.getMobileno());
			getCustomer.setNewPassword(customer.getPassword());
			getCustomer.setUsername(customer.getUsername());
			updatedCustomer = customerRepo.save(getCustomer);
		}
		
		return updatedCustomer;
	}

	@Override
	public Customer deleteACustomer(String email) {
		Customer customerToBedeleted = null;
		Optional optional = customerRepo.findById(email);
		if (optional.isPresent()) {
			customerToBedeleted = customerRepo.findById(email).get();
			customerRepo.deleteById(email);
		}
		return customerToBedeleted;
	}

}
