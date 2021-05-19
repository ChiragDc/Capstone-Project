package com.groceryapp.implementation;

import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Service;

import com.groceryapp.dao.OrderDao;
import com.groceryapp.entities.Order;
import com.groceryapp.service.OrderService;

@Service
@Transactional
public class OrderServiceImplementation implements OrderService {

	private OrderDao orderDao;

	public OrderServiceImplementation(OrderDao orderDao) {

		this.orderDao = orderDao;
	}

	@Override
	public @NotNull Iterable<Order> getAllOrders() {
		// TODO Auto-generated method stub
		return this.orderDao.findAll();
	}

	@Override
	public Order create(@NotNull(message = "The order cannot be null.") @Valid Order order) {
		// TODO Auto-generated method stub
		return this.orderDao.save(order);
	}

	@Override
	public void update(@NotNull(message = "The order cannot be null.") @Valid Order order) {
		// TODO Auto-generated method stub
		this.orderDao.save(order);
	}

}
