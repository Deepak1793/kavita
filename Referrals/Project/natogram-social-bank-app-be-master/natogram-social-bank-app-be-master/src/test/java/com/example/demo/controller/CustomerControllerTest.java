package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.service.CustomerService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class CustomerControllerTest {

    private MockMvc mockMvc;
    @Mock
    CustomerService customerService;
    @InjectMocks
    private CustomerController customerController;

    private Customer customer;
    private List<Customer> customerList;


    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(customerController).build();
        customer = new Customer();
        customer.setEmailid("amu@gmail.com");
        customer.setAccountno((long)12345648);
        customer.setMobileno((long)12345648);
        customer.setPassword("1234");
        customer.setUsername("ammu");
        customerList = new ArrayList<>();
        customerList.add(customer);
    }

    @AfterEach
    public void tearDown() {
    	customer = null;
    }

    @Test
    public void givenCustomerToSaveThenShouldReturnSavedCustomer() throws Exception {
        when(customerService.addACustomer(any())).thenReturn(customer);
        mockMvc.perform(post("/customer")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(customer)))
                .andExpect(status().isCreated())
                .andDo(MockMvcResultHandlers.print());
//        verify(customerService).addACustomer(customer);
        //pwd encrypted
    }

    @Test
    public void givenGetAllCustomerThenShouldReturnListOfAllCustomerList() throws Exception {
        when(customerService.findAllCustomers()).thenReturn(customerList);
        mockMvc.perform(MockMvcRequestBuilders.get("/customers")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(customer)))
                .andDo(MockMvcResultHandlers.print());
        verify(customerService).findAllCustomers();
        verify(customerService, times(1)).findAllCustomers();

    }

    @Test
    void givenCustomerUserIdThenShouldReturnRespectiveCustomer() throws Exception {
        when(customerService.findACustomer(customer.getEmailid())).thenReturn(customer);
        mockMvc.perform(get("/customer/amu@gmail.com"))
                .andExpect(MockMvcResultMatchers.status()
                        .isOk())
                .andDo(MockMvcResultHandlers.print());

    }

    @Test
    public void givenCustomerIdToDeleteThenShouldNotReturnDeletedCustomer() throws Exception {
        when(customerService.deleteACustomer(customer.getEmailid())).thenReturn(customer);
        mockMvc.perform(delete("/customer/amu@gmail.com")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(customer)))
                .andExpect(MockMvcResultMatchers.status().isOk()).andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void givenCustomerToUpdateThenShouldReturnUpdatedCustomer() throws Exception {
        when(customerService.updateACustomer(any())).thenReturn(customer);
        mockMvc.perform(put("/customer").contentType(MediaType.APPLICATION_JSON).content(asJsonString(customer)))
                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
    }

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}