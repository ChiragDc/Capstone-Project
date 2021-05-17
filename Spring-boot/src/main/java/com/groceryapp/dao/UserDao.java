package com.groceryapp.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groceryapp.entities.User;

public interface UserDao extends JpaRepository<User, Long> {
		Optional<User> findByUsername(String name);
}
