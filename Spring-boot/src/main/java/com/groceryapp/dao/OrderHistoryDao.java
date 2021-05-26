package com.groceryapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groceryapp.entities.OrderHistory;

public interface OrderHistoryDao extends JpaRepository<OrderHistory, Long> {

}
