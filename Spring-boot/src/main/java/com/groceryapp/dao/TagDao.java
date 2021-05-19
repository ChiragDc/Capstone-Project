package com.groceryapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groceryapp.entities.Tag;

public interface TagDao extends JpaRepository<Tag, Long>{
    
}