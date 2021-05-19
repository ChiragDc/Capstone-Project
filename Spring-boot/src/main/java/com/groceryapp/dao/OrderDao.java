package com.groceryapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groceryapp.entities.Order;

public interface OrderDao extends JpaRepository<Order, Long> {

}
