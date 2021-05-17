package com.groceryapp.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.groceryapp.dao.UserDao;
import com.groceryapp.entities.Status;
import com.groceryapp.entities.User;
import com.groceryapp.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private UserDao userDao;
	
	@PostMapping("/addUser")
	User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
	

	@GetMapping("/admin/findAllUsers")
	public List<User> findAllUsers() {
		return userService.findAllUsers();
	}
	
	@PutMapping("/editUser/{id}")
	User editUser(@RequestBody User user, @PathVariable long id) {
		return userService.editUser(user, id);
	}
	

	@GetMapping("/findUserById/{id}")
	User findUserById(@PathVariable long id) {
		return userService.findUserById(id);
	}

	@DeleteMapping("/deleteUser/{id}")
	void deleteUser(@PathVariable long id) {
		userService.deleteUser(id);
	}
	
	
	//login by username? no password check
	@GetMapping("/findByUsername/{username}")
	User findByUsername(@PathVariable String username) {
		
		
		return userService.findByUsername(username);
	}
	
	@PostMapping("/login")
    public Status loginUser(@Valid @RequestBody User user) {
        List<User> users = userDao.findAll();
        for (User other : users) {
            if (other.equals(user)) {
                
            	
                return Status.SUCCESS;
            }
        }
        return Status.FAILURE;
    }
	
}
