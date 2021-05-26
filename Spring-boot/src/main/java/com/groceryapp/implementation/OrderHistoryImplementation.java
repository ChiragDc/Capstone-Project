package com.groceryapp.implementation;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.groceryapp.dao.OrderHistoryDao;
import com.groceryapp.entities.OrderHistory;
import com.groceryapp.service.OrderHistoryService;

@Transactional
@Component
public class OrderHistoryImplementation implements OrderHistoryService{
	
	@Autowired
	OrderHistoryDao orderHistoryDao;
	
	@Override
	public OrderHistory addOrder(OrderHistory orderHistory) {
		// TODO Auto-generated method stub
		return orderHistoryDao.save(orderHistory);
	}

	@Override
	public List<OrderHistory> findAllOrderHistory() {
		// TODO Auto-generated method stub
		return orderHistoryDao.findAll();
	}

}
