package com.example.demo.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.model.Users;
import com.example.demo.repository.BankTransactionsRepository;
import com.example.demo.repository.BankdetailsRepo;
import com.example.demo.repository.PaymentsRepository;
import com.example.demo.repository.UserRepo;

@ExtendWith(MockitoExtension.class)
class UserServiceImpTest {
	
	@Mock
	BankTransactionsRepository btrepo ;
	
	@Mock
	BankdetailsRepo bankDetRepo;
	
	@Mock
	UserRepo userrepo;
	
	@Mock
	PaymentsRepository paymentsrepo;
	
	@InjectMocks
    private NetflixUserServiceImpl customeUserDetailsService;
	
	@Test 
	public void test_registerUser() throws Exception
	{
		Users userToBeSaved = new Users("Raja@gmail.com", "Raja", "Raja Rajaendran",(long) 988425512, "Raja@123");
		
		when(customeUserDetailsService.registerUser(userToBeSaved)).thenReturn(userToBeSaved);

		Users savedUser = customeUserDetailsService.registerUser(userToBeSaved);
		
		assertNotNull(savedUser);
		assertEquals(userToBeSaved,savedUser);
		assertEquals(userToBeSaved.getEmailid(),savedUser.getEmailid() );
	}
	
	@Test 
	public void test_getAllUser()
	{
		List<Users> myUsers = new ArrayList<Users>();
		myUsers.add(new Users("Ravi", "Balan", "sbravi.b@gmail.com", (long) 988425512, "Ravibalan@12" ));
		myUsers.add(new Users("Bharathy", "Muthukumaran", "muthub@gmail.com",(long) 988425513, "Bharathy@12" ));
		
		when(userrepo.findAll()).thenReturn(myUsers); //Mocking
		
		assertEquals(2,customeUserDetailsService.getAllUser().size());
		

	}

	

	    
	    
	    
	
	
	
	

}
