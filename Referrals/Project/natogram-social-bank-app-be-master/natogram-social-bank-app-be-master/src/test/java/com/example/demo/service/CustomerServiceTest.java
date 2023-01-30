package com.example.demo.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;


@ExtendWith(MockitoExtension.class)
class CustomerServiceTest {

	@Mock
    private CustomerRepository custRepo;
	
	@InjectMocks
    private CustomerServiceImpl custService;
    private Customer customer ,customer1;
    private List<Customer> customerList;
    private Optional optional;

    
    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);

        customer = new Customer("amuthes@outlook.com", "ammuthes", (long)1548547454, (long)1548547454, "12345");
        customer1 = new Customer("amu@outlook.com", "ammu", (long)1548547454, (long)1548547454, "12345");
        optional = Optional.of(customer);
    }


    @AfterEach
    public void tearDown() {
    	customer = null;
    }

    @Test
    public void givenCustomerUserToSaveThenShouldReturnSavedCustomer() throws Exception {
        when(custRepo.save(any())).thenReturn(customer);
        assertEquals(customer, custService.addACustomer(customer));
        verify(custRepo, times(1)).save(any());
    }

    @Test
    public void givenCustomerToSaveThenShouldNotReturnSavedCustomer() {
        when(custRepo.save(any())).thenThrow(new RuntimeException());
        Assertions.assertThrows(RuntimeException.class,() -> {
        	custService.addACustomer(customer);
//        	addACustomer(Customers);
        });
        verify(custRepo, times(1)).save(any());
    }

    @Test
    public void givenGetAllCustomerThenShouldReturnListOfAllCustomer() {
    	custRepo.save(customer);
        //stubbing the mock to return specific data
        when(custRepo.findAll()).thenReturn(customerList);
        List<Customer> customerList1 = custService.findAllCustomers();
        assertEquals(customerList, customerList1);
        verify(custRepo, times(1)).save(customer);
        verify(custRepo, times(1)).findAll();
    }

    @Test
    public void givenCustomerIdThenShouldReturnRespectiveCustomer() throws Exception {
        when(custRepo.findById(anyString())).thenReturn(Optional.of(customer));
        Customer retrievedcustomer = custService.findACustomer(customer.getEmailid());
        verify(custRepo, times(1)).findById(anyString());

    }

   
    @Test
    void givenCustomerIdToDeleteThenShouldReturnDeletedCustomer() {
        when(custRepo.findById(customer.getEmailid())).thenReturn(optional);
        Customer deletedCustomer = custService.deleteACustomer("amuthes@outlook.com");
        assertEquals("amuthes@outlook.com", deletedCustomer.getEmailid());

        verify(custRepo, times(2)).findById(customer.getEmailid());
        verify(custRepo, times(1)).deleteById(customer.getEmailid());
    }

    @Test
    void givenCustomerIdToDeleteThenShouldNotReturnDeletedCustomer() {
        when(custRepo.findById(customer.getEmailid())).thenReturn(Optional.empty());
        Customer deletedCustomer = custService.deleteACustomer("amuthes@outlook.com");
        verify(custRepo, times(1)).findById(customer.getEmailid());
    }
    
    @Test
    public void givenCustomerToUpdateThenShouldReturnUpdatedCustomer() {
        when(custRepo.findById(customer.getEmailid())).thenReturn(optional);
        when(custRepo.save(customer)).thenReturn(customer);
        customer.setEmailid("amuthes@outlook.com");
        Customer customer1 = custService.updateACustomer(customer);
        assertEquals(customer1.getEmailid(), "amuthes@outlook.com");
        verify(custRepo, times(1)).save(customer);
        verify(custRepo, times(2)).findById(customer.getEmailid());
    }

    @Test
    public void givenCustomerToUpdateThenShouldNotReturnUpdatedCustomer() {
        when(custRepo.findById(customer.getEmailid())).thenReturn(Optional.empty());
        Customer customer1 = custService.updateACustomer(customer);
        assertNull(customer1);
        verify(custRepo, times(1)).findById(customer.getEmailid());
    }

}
