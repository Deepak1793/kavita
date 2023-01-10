package com.example.demo.service;


import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.*;
import com.example.demo.model.*;
import com.example.demo.repository.*;

@Service
public class UserService {

	
    private UserRepository userRepo;

    @Autowired
    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public void registerUser(User user) throws UserExistsException {
        Optional<User> optUser = userRepo.findById(user.getUserName());
        if (optUser.isPresent()) {
            throw new UserExistsException();
        }
        userRepo.save(user);
    }
    public List<User>getAllUser(){
		return userRepo.findAll();
	}
    public User login(String userName) {
        User user = null;
		try {
		if(userName!=null) {
			user = userRepo.getById(userName);
		}}catch(EntityNotFoundException e) {
			user = null;
		}
        return user;
    }
    
    public User validateUser(User user) throws UserNotFoundException {
		Optional<User> result = userRepo.findById(user.getUserName());
		if(result.isPresent()==false) {
			throw new UserNotFoundException("Invalid UserName/Password");
		}
		if(!result.get().getPassword().equals(user.getPassword())) {
			throw new UserNotFoundException("Invalid UserName/Password");
		}
		return result.get();
	}
}