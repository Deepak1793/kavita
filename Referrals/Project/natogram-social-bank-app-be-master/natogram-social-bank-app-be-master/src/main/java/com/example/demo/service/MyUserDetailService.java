package com.example.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;

@Service
public class MyUserDetailService implements UserDetailsService {

	@Autowired
	CustomerRepository CustomerRepo;

	@Override
	public UserDetails loadUserByUsername(String emailid) throws UsernameNotFoundException {
		Customer customer = CustomerRepo.findById(emailid).get();
		return new User(customer.getEmailid(), customer.getPassword(), new ArrayList<>());
	}
	
}
