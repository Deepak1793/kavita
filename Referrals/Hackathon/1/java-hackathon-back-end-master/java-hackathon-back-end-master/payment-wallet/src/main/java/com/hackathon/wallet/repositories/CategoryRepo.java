package com.hackathon.wallet.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.wallet.entities.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer> {

}