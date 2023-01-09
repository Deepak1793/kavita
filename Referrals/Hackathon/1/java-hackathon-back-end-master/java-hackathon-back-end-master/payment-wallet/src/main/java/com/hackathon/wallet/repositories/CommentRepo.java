package com.hackathon.wallet.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.wallet.entities.Comment;

public interface CommentRepo  extends JpaRepository<Comment	, Integer> {

}
