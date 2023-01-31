package com.example.demo.model;
import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;



@Entity
public class Payments {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name="mysequence", initialValue=25600)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="mysequence")
	Integer paymentid;
	String beneficiary;
	Integer beneficiaryaccno;
	Integer accno;
	String emailid;
	String paydesc;
	
	
	public Integer getPaymentid() {
		return paymentid;
	}
	public void setPaymentid(Integer paymentid) {
		this.paymentid = paymentid;
	}
	public String getBeneficiary() {
		return beneficiary;
	}
	public void setBeneficiary(String beneficiary) {
		this.beneficiary = beneficiary;
	}
	public Integer getBeneficiaryaccno() {
		return beneficiaryaccno;
	}
	public void setBeneficiaryaccno(Integer beneficiaryaccno) {
		this.beneficiaryaccno = beneficiaryaccno;
	}
	public Integer getAccno() {
		return accno;
	}
	public void setAccno(Integer accno) {
		this.accno = accno;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPaydesc() {
		return paydesc;
	}
	public void setPaydesc(String paydesc) {
		this.paydesc = paydesc;
	}
	public BigDecimal getAmount() {
		return amount;
	}
	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}
	BigDecimal amount;
	public Payments(Integer paymentid, String beneficiary, Integer beneficiaryaccno, Integer accno, String emailid,
			String paydesc, BigDecimal amount) {
		super();
		this.paymentid = paymentid;
		this.beneficiary = beneficiary;
		this.beneficiaryaccno = beneficiaryaccno;
		this.accno = accno;
		this.emailid = emailid;
		this.paydesc = paydesc;
		this.amount = amount;
	}
	public Payments() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Payments [paymentid=" + paymentid + ", beneficiary=" + beneficiary + ", beneficiaryaccno="
				+ beneficiaryaccno + ", accno=" + accno + ", emailid=" + emailid + ", paydesc=" + paydesc + ", amount="
				+ amount + "]";
	}	

	
	
}
