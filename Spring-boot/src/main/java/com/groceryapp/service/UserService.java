package com.groceryapp.service;

import java.util.List;

import com.groceryapp.entities.User;

public interface UserService {

	User addUser(User user);

	List<User> findAllUsers();

	User editUser(User user, long id);

	User findUserById(long id);

	void deleteUser(long id);

	User findByUsername(String username);

	boolean checkUser(User user);

}
