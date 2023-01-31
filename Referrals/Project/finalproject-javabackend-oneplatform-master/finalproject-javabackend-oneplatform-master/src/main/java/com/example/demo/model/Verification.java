package com.example.demo.model;

import javax.persistence.Entity;

import javax.persistence.Id;

@Entity
public class Verification {
	
	@Id
	String emailid;
	int pin;
	
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public int getPin() {
		return pin;
	}
	public void setPin(int pin) {
		this.pin = pin;
	}
	@Override
	public String toString() {
		return "verification [emailid=" + emailid + ", pin=" + pin + "]";
	}
	public Verification(String emailid, int pin) {
		super();
		this.emailid = emailid;
		this.pin = pin;
	}
	public Verification() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	
	
	
	
	

}
