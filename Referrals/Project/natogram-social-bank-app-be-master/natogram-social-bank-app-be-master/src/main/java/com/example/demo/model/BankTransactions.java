package com.example.demo.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
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
@Table(name = "Banktransactions")
public class BankTransactions {

	@Id
	private Long transactionid;
	private Long accNo;
	@Column(name = "date_of_transaction", columnDefinition = "DATE")
	private LocalDate dateOfTransaction;
	private String transactionType;
	private BigDecimal withdrawalAmount;
	private BigDecimal depositAmount;
	private BigDecimal balance;
	
	
}
