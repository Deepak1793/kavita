package com.example.demo.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.model.BankDetails;
import com.example.demo.model.BankTransactions;
import com.example.demo.repository.BankTransactionsRepository;


@ExtendWith(MockitoExtension.class)
class BankTransactionsServiceImplTest {
	
	@Mock
	BankTransactionsRepository btrepo;
	
	@InjectMocks
	BankTransactionsServiceImpl BanktransactService;
	
	@Test 
	public void test_getAllUser()
	{
		List<BankTransactions> myUsers = new ArrayList<BankTransactions>();
		myUsers.add( new BankTransactions((long)123456789, (long)20020,LocalDate.of(2022,03,22),"trasnfer",BigDecimal.valueOf(250.00),BigDecimal.valueOf(150.00),BigDecimal.valueOf(100.00),"balan@gmail.com"));
		when(btrepo.findAll()).thenReturn(myUsers); //Mocking
		
		assertEquals(1,BanktransactService.findAllTransactions().size());
		

	}
	
	
	
	


}
