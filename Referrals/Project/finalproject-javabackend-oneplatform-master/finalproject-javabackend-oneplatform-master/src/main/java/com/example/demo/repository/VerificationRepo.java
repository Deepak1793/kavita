package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Verification;


@Repository
public interface VerificationRepo extends JpaRepository<Verification, String> {

}
