package com.example.demo.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
@Table(name = "customer")
public class Customer {

	@Id
	private String emailid;
	private String username;
	private Long mobileno;
	private Long accountno;
	private String password;
	
	public Customer() {
		super();		
	}

	public Customer(String emailid, String username, Long mobileno, Long accountno, String password) {
		super();
		this.emailid = emailid;
		this.username = username;
		this.mobileno = mobileno;
		this.accountno = accountno;
		this.password = password;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Long getMobileno() {
		return mobileno;
	}

	public void setMobileno(Long mobileno) {
		this.mobileno = mobileno;
	}

	public Long getAccountno() {
		return accountno;
	}

	public void setAccountno(Long accountno) {
		this.accountno = accountno;
	}

	public String getPassword() {
		return password;
	}
	
	public void setNewPassword(String password) {
		this.password = password;
	}

	public void setPassword(String password) {
		BCryptPasswordEncoder pwdEncoder = new BCryptPasswordEncoder();
		String encryptedPwd = pwdEncoder.encode(password);
		this.password = encryptedPwd;
	}

	@Override
	public String toString() {
		return "Customer [emailid=" + emailid + ", username=" + username + ", mobileno=" + mobileno + ", accountno="
				+ accountno + ", password=" + password + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(accountno, emailid, mobileno, password, username);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Customer other = (Customer) obj;
		return Objects.equals(accountno, other.accountno) && Objects.equals(emailid, other.emailid)
				&& Objects.equals(mobileno, other.mobileno) && Objects.equals(password, other.password)
				&& Objects.equals(username, other.username);
	}
	
	
}
