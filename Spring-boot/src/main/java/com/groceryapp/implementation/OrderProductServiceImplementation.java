package com.groceryapp.implementation;

import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.groceryapp.dao.OrderProductDao;
import com.groceryapp.entities.OrderProduct;
import com.groceryapp.service.OrderProductService;

@Transactional
@Component
public class OrderProductServiceImplementation implements OrderProductService {

	@Autowired
	private OrderProductDao orderProductDao;

	@Override
	public OrderProduct create(
			@NotNull(message = "The products for order cannot be null.") @Valid OrderProduct orderProduct) {
		// TODO Auto-generated method stub
		return this.orderProductDao.save(orderProduct);
	}

}
