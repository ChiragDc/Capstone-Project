package com.groceryapp.implementation;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.groceryapp.dao.UserDao;
import com.groceryapp.entities.Status;
import com.groceryapp.entities.User;
import com.groceryapp.service.UserService;

@Transactional
@Component
public class UserServiceImplementation implements UserService{
	
	@Autowired
	private UserDao userDao;
	
	@Override
	public User addUser(User user) {
		List<User> users = userDao.findAll();
	    if (users.size() == 0) {
	     user.setAdmin(true);
	   }
			
	   for (User existUser : users) {
		   
	    if (user.getUsername().equals(existUser.getUsername())) {
	     existUser.setUsername(existUser.getUsername());
	     existUser.setPassword(existUser.getPassword());
	     return userDao.save(existUser);
	      }
	     }
		
	   return userDao.save(user);
	}

	@Override
	public List<User> findAllUsers() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

	@Override
	public User editUser(User user, long id) {
		// TODO Auto-generated method stub
		User existUser = userDao.findById(id).orElse(null);
	    existUser.setUsername(user.getUsername());
	    existUser.setPassword(user.getPassword());
	    existUser.setAdmin(user.isAdmin());
	    existUser.setEmail(user.getEmail());
	    return userDao.save(existUser);
	}

	@Override
	public User findUserById(long id) {
		// TODO Auto-generated method stub
		return userDao.findById(id).orElse(null);
	}

	@Override
	public void deleteUser(long id) {
		 userDao.deleteById(id);
		
	}

	@Override
	public User findByUsername(String username) {
		// TODO Auto-generated method stub
		 Optional<User> users = userDao.findByUsername(username);
		    if (users.isPresent()) {
		     User user = users.get();
		     return user;
		    }
		     return null;
		 }

	@Override
	public Status loginUser(User user) {
		// TODO Auto-generated method stub
		List<User> users = userDao.findAll();
        for (User other : users) {
            if (other.equals(user)) {
                
            	
                return Status.SUCCESS;
            }
        }
        return Status.FAILURE;
	}

}
