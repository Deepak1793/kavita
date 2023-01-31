package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.demo.model.BankTransactions;


	
	@Repository
	public interface BankTransactionsRepository extends JpaRepository<BankTransactions, Long> {

		List<BankTransactions> findByAccNo(Long accno);

		List<BankTransactions> findByEmailid(String emailid);

	}


