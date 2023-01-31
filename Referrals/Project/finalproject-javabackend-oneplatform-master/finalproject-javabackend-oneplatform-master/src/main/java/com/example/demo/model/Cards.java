package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Cards {
	
	
	String emailid;
	@Id
	Long creditCardNumber;
	String creditCardHolderName;
	int creditCardExpMonth;
	int creditCardExpYear;
	int creditCardCvv;
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public Long getCreditCardNumber() {
		return creditCardNumber;
	}
	public void setCreditCardNumber(Long creditCardNumber) {
		this.creditCardNumber = creditCardNumber;
	}
	public String getCreditCardHolderName() {
		return creditCardHolderName;
	}
	public void setCreditCardHolderName(String creditCardHolderName) {
		this.creditCardHolderName = creditCardHolderName;
	}
	public int getCreditCardExpMonth() {
		return creditCardExpMonth;
	}
	public void setCreditCardExpMonth(int creditCardExpMonth) {
		this.creditCardExpMonth = creditCardExpMonth;
	}
	public int getCreditCardExpYear() {
		return creditCardExpYear;
	}
	public void setCreditCardExpYear(int creditCardExpYear) {
		this.creditCardExpYear = creditCardExpYear;
	}
	public int getCreditCardCvv() {
		return creditCardCvv;
	}
	public void setCreditCardCvv(int creditCardCvv) {
		this.creditCardCvv = creditCardCvv;
	}
	@Override
	public String toString() {
		return "Cards [emailid=" + emailid + ", creditCardNumber=" + creditCardNumber + ", creditCardHolderName="
				+ creditCardHolderName + ", creditCardExpMonth=" + creditCardExpMonth + ", creditCardExpYear="
				+ creditCardExpYear + ", creditCardCvv=" + creditCardCvv + "]";
	}
	public Cards() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cards(String emailid, Long creditCardNumber, String creditCardHolderName, int creditCardExpMonth,
			int creditCardExpYear, int creditCardCvv) {
		super();
		this.emailid = emailid;
		this.creditCardNumber = creditCardNumber;
		this.creditCardHolderName = creditCardHolderName;
		this.creditCardExpMonth = creditCardExpMonth;
		this.creditCardExpYear = creditCardExpYear;
		this.creditCardCvv = creditCardCvv;
	}
	
	
	

}
