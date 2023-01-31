package com.example.demo.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.model.BankDetails;
import com.example.demo.model.Users;
import com.example.demo.repository.BankdetailsRepo;

@ExtendWith(MockitoExtension.class)
class BankdetailsServiceImplTest2 {

	@Mock
	BankdetailsRepo bankDetRepo;
	
	@InjectMocks
    private BankdetailsServiceImpl BankdetailsServiceImpl;
	
	
	
	@Test 
	public void test_getAllUser()
	{
		List<BankDetails> myUsers = new ArrayList<BankDetails>();
		myUsers.add( new BankDetails((long)123456789, "Balan", "HDFC", "Ravibalan@12",BigDecimal.valueOf(250.00),"balan12"));
		when(bankDetRepo.findAll()).thenReturn(myUsers); //Mocking
		
		assertEquals(1,BankdetailsServiceImpl.findAllBankUsers().size());
		

	}
	
		

}
