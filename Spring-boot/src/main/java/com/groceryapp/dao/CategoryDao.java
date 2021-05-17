package com.groceryapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groceryapp.entities.Category;

public interface CategoryDao extends JpaRepository<Category, Long> {

}
