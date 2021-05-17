package com.groceryapp.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groceryapp.entities.Cart;

public interface CartDao extends JpaRepository<Cart, Long> {
	Optional<Cart> findByName(String name);
}
