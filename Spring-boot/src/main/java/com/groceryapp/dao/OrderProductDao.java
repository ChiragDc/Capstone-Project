package com.groceryapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groceryapp.entities.OrderProduct;

public interface OrderProductDao extends JpaRepository<OrderProduct, Long> {

}
