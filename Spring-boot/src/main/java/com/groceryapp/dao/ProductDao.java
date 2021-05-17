package com.groceryapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groceryapp.entities.Product;

public interface ProductDao extends JpaRepository<Product, Long> {
	
}
