package com.example.demo.model;

import java.math.BigDecimal;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
//@Table(name = "Banktransactions")
public class BankTransactions {
	
	@Id
	private Long transactionid;
	private Long accNo;
//	@Column(name = "date_of_transaction", columnDefinition = "DATE")
	private LocalDate dateoftransaction;
	private String transactiontype;
	private BigDecimal withdrawalamount;
	private BigDecimal depositamount;
	private BigDecimal balance;
	private String emailid;
	
	public Long getTransactionid() {
		return transactionid;
	}
	public void setTransactionid(Long transactionid) {
		this.transactionid = transactionid;
	}
	public Long getAccNo() {
		return accNo;
	}
	public void setAccNo(Long accNo) {
		this.accNo = accNo;
	}
	public LocalDate getDateOfTransaction() {
		return dateoftransaction;
	}
	public void setDateOfTransaction(LocalDate dateOfTransaction) {
		this.dateoftransaction = dateOfTransaction;
	}
	public String getTransactionType() {
		return transactiontype;
	}
	public void setTransactionType(String transactionType) {
		this.transactiontype = transactionType;
	}
	public BigDecimal getWithdrawalAmount() {
		return withdrawalamount;
	}
	public void setWithdrawalAmount(BigDecimal withdrawalAmount) {
		this.withdrawalamount = withdrawalAmount;
	}
	public BigDecimal getDepositAmount() {
		return depositamount;
	}
	public void setDepositAmount(BigDecimal depositAmount) {
		this.depositamount = depositAmount;
	}
	public BigDecimal getBalance() {
		return balance;
	}
	public void setBalance(BigDecimal balance) {
		this.balance = balance;
	}
	public BankTransactions() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	public BankTransactions(Long transactionid, Long accNo, LocalDate dateoftransaction, String transactiontype,
			BigDecimal withdrawalamount, BigDecimal depositamount, BigDecimal balance, String emailid) {
		super();
		this.transactionid = transactionid;
		this.accNo = accNo;
		this.dateoftransaction = dateoftransaction;
		this.transactiontype = transactiontype;
		this.withdrawalamount = withdrawalamount;
		this.depositamount = depositamount;
		this.balance = balance;
		this.emailid = emailid;
	}
	
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	
	@Override
	public String toString() {
		return "BankTransactions [transactionid=" + transactionid + ", accNo=" + accNo + ", dateoftransaction="
				+ dateoftransaction + ", transactiontype=" + transactiontype + ", withdrawalamount=" + withdrawalamount
				+ ", depositamount=" + depositamount + ", balance=" + balance + ", emailid=" + emailid + "]";
	}
	
	
	
	
	
	
	 


}
