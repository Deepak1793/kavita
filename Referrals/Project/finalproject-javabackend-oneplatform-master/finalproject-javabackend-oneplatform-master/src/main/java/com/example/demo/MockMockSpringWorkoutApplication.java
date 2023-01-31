package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import com.example.demo.filter.JWTFilter;


@EnableEurekaClient
@SpringBootApplication
public class MockMockSpringWorkoutApplication {

	public static void main(String[] args) {
		SpringApplication.run(MockMockSpringWorkoutApplication.class, args);
	}

	

	
}
