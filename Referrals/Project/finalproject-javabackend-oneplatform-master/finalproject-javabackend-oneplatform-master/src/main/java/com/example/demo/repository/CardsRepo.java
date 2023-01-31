package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Cards;

@Repository
public interface CardsRepo extends JpaRepository<Cards, Long>{
	
	List<Cards> findByEmailid(String emailid);
	
	

}
