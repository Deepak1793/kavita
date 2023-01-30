package com.example.demo.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bankuser")
public class Bankuser {
	
	@Id
	private Long accNo;
	private String firstName;
	private String lastName;
	private String city;
	private String branch;
	private BigDecimal balance;
	
}
