package com.example.demo.service;

import java.util.ArrayList;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import com.example.demo.model.Users;

import com.example.demo.repository.UserRepo;

@Service
public class MyUserDetailService implements UserDetailsService {

	
	@Autowired
	UserRepo UserRepo; 
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		 Users netflixUser = UserRepo.findById(username).get();
		 
		return new User(netflixUser.getId(), netflixUser.getPassword(), new ArrayList<>()) ;
	}

}
