package com.example.demo.service;

import java.util.List;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.UserAlreadyExistException;
import com.example.demo.exception.UserNotFoundException;

import com.example.demo.model.Users;
import com.example.demo.repository.UserRepo;

@Service
public class NetflixUserServiceImpl implements NetflixUserService {
	
	@Autowired
	UserRepo UserRepo;
	
	@Override
	public Users registerUser(Users netflixUser) throws UserAlreadyExistException {
		return UserRepo.save(netflixUser);
	}

	@Override
	public Users findUserbyId(String username) throws UserNotFoundException {
		return UserRepo.findById(username).get();
	}

	@Override
	public List<Users> getAllUser() {
		return UserRepo.findAll();
	}

	@Override
	public Users deleteAUser(String username) {
		Users deletedNetflixUser = null;
		
		Optional optional = UserRepo.findById(username);
		
		if(optional.isPresent()) {
		deletedNetflixUser = UserRepo.findById(username).get();
		UserRepo.deleteById(username);
		}
		
		return deletedNetflixUser;
	}

	@Override
	public Users updateAUser(Users netflixUser) {
		Users updatedNetflixUser = null;
		
		Optional optional = UserRepo.findById(netflixUser.getId());
		
		if (optional.isPresent()) {
			Users getUser = UserRepo.findById(netflixUser.getId()).get();
			getUser.setEmailid(netflixUser.getEmailid());
			getUser.setMobno(netflixUser.getMobno());
			getUser.setName(netflixUser.getName());
			getUser.setPassword(netflixUser.getPassword());
			
			updatedNetflixUser = UserRepo.save(getUser);
		}
		
		return updatedNetflixUser;
	}

	
	
}
