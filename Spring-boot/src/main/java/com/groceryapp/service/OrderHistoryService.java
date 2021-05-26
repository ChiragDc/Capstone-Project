package com.groceryapp.service;

import java.util.List;

import com.groceryapp.entities.OrderHistory;

public interface OrderHistoryService {
		
	OrderHistory addOrder(OrderHistory orderHistory);
	
	List<OrderHistory> findAllOrderHistory();
}
