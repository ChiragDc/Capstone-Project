package com.groceryapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.groceryapp.entities.OrderHistory;
import com.groceryapp.service.OrderHistoryService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")	
public class OrderHistoryController {
	
	@Autowired
	private OrderHistoryService orderhistoryService;
	
	@PostMapping("/orderHistory")
	OrderHistory addOrderHistory(@RequestBody OrderHistory orderHistory) {
		return orderhistoryService.addOrder(orderHistory);
	}
	

	@GetMapping("/orderHistory")
	public List<OrderHistory> findAllOrderHistory() {
		return orderhistoryService.findAllOrderHistory();
	}
}
