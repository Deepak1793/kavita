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

import com.example.demo.model.BankTransactions;
import com.example.demo.model.Payments;
import com.example.demo.repository.BankTransactionsRepository;
import com.example.demo.repository.PaymentsRepository;


@ExtendWith(MockitoExtension.class)
class PaymentServiceImplTest {
	
	@Mock
	PaymentsRepository paymentrepo;
	
	@InjectMocks
	PaymentServiceImpl paymentService;
	
	@Test 
	public void test_getAllUser()
	{
		List<Payments> myUsers = new ArrayList<Payments>();
		myUsers.add( new Payments(2563,"dinesh",12345,10101,"balan@gmail.com","transfer",BigDecimal.valueOf(250.00)));
		when(paymentrepo.findAll()).thenReturn(myUsers); //Mocking
		
		assertEquals(1,paymentService.findAllPayments().size());
		
		

	}

	

}
