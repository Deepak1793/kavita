package com.hackathon.wallet.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.wallet.entities.Role;

public interface RoleRepo  extends JpaRepository<Role, Integer>{

}
