package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.demo.model.BankDetails;

@Repository
public interface BankdetailsRepo extends JpaRepository <BankDetails,Long>{

	List<BankDetails> findByEmailid(String emailid);

}
