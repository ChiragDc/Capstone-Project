package com.groceryapp.implementation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.groceryapp.dao.CartDao;
import com.groceryapp.dao.UserDao;
import com.groceryapp.entities.Cart;
import com.groceryapp.entities.User;
import com.groceryapp.service.CartService;

public class CartServiceImplementation implements CartService {
	
	@Autowired
	 private CartDao cartDao;
		
	 @Autowired
	 private UserDao userDao;
	
	@Override
	public Cart addCartToUser(Cart cart, long idUser) {
		 User user = userDao.findById(idUser).orElse(null);
		   user.addCartToUser(cart);
		   return cartDao.save(cart);
	}

	@Override
	public void deleteCart(long id) {
		// TODO Auto-generated method stub
		cartDao.deleteById(id);
	}

	@Override
	public List<Cart> findCartsForUser(long idUser) {
		// TODO Auto-generated method stub
		User user=userDao.findById(idUser).orElse(null);
		return user.getCarts();
	}

	@Override
	public Cart findCartById(long id) {
		// TODO Auto-generated method stub
		return cartDao.findById(id).orElse(null);
	}

	@Override
	public void removeFromCart(long idCart, long idUser) {
		// TODO Auto-generated method stub
		User user=userDao.findById(idUser).orElseThrow(null);
		Cart cart=cartDao.findById(idCart).orElseThrow(null);
		user.removeFromCart(cart);
		cartDao.delete(cart);
		
	}

	@Override
	public Cart findByCartName(String name) {
		// TODO Auto-generated method stub
		 Optional<Cart> carts = cartDao.findByName(name);
		   if (carts.isPresent()) {
			Cart cart = carts.get();
		    return cart;
		   }
		   return null;
	}

}
