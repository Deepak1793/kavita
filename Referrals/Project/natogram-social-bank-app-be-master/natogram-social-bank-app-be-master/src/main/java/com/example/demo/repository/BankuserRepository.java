package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Bankuser;

@Repository
public interface BankuserRepository extends JpaRepository<Bankuser, Long> {

		
}
