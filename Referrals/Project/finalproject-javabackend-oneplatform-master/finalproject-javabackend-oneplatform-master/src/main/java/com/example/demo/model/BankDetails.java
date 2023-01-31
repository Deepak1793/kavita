package com.example.demo.model;

import java.math.BigDecimal;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
//@Table(name = "BankDetails")
public class BankDetails {
		
	@Id
	private Long accno;
	private String accname;
	private String bankname;
	private String emailid;
	private BigDecimal balance;
	private String userid;

	
		

//	ForeignKey (userid) Reference bank_user(userid);
	
	
	public BankDetails() {
	super();
	// TODO Auto-generated constructor stub
}




	public Long getAccno() {
		return accno;
	}




	public void setAccno(Long accno) {
		this.accno = accno;
	}




	public String getAccname() {
		return accname;
	}




	public void setAccname(String accname) {
		this.accname = accname;
	}




	public String getBankname() {
		return bankname;
	}




	public void setBankname(String bankname) {
		this.bankname = bankname;
	}




	public String getEmailid() {
		return emailid;
	}




	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}




	public BigDecimal getBalance() {
		return balance;
	}




	public void setBalance(BigDecimal balance) {
		this.balance = balance;
	}




	public String getUserid() {
		return userid;
	}




	public void setUserid(String userid) {
		this.userid = userid;
	}




	@Override
	public int hashCode() {
		return Objects.hash(accname, accno, balance, bankname, emailid, userid);
	}




	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BankDetails other = (BankDetails) obj;
		return Objects.equals(accname, other.accname) && Objects.equals(accno, other.accno)
				&& Objects.equals(balance, other.balance) && Objects.equals(bankname, other.bankname)
				&& Objects.equals(emailid, other.emailid) && Objects.equals(userid, other.userid);
	}




	public BankDetails(Long accno, String accname, String bankname, String emailid, BigDecimal balance, String userid) {
		super();
		this.accno = accno;
		this.accname = accname;
		this.bankname = bankname;
		this.emailid = emailid;
		this.balance = balance;
		this.userid = userid;
	}




	@Override
	public String toString() {
		return "BankDetails [accno=" + accno + ", accname=" + accname + ", bankname=" + bankname + ", emailid="
				+ emailid + ", balance=" + balance + ", userid=" + userid + "]";
	}

	

	



	
	
	
	
	
	
	

	
	

}
