package com.groceryapp.implementation;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.groceryapp.dao.CategoryDao;
import com.groceryapp.dao.UserDao;
import com.groceryapp.entities.Category;
import com.groceryapp.entities.User;
import com.groceryapp.service.CategoryService;

@Transactional
@Component
public class CategoryServiceImplementation implements CategoryService{
	
	@Autowired
	 private CategoryDao categoryDao;
	
	 @Autowired
	 private UserDao userDao;
	
	@Override
	public Category addCategoryToUser(Category category, long idUser) {
		User user = userDao.findById(idUser).orElse(null);
		   user.addCategoryToUser(category);
		   return categoryDao.save(category);
	}

	@Override
	public Category editCategory(Category category, long id) {
		Category existsCategory = categoryDao.findById(id).orElse(null);
		   existsCategory.setName(category.getName());
		   return categoryDao.save(existsCategory);
	}

	@Override
	public Category findCategoryById(long id) {
		// TODO Auto-generated method stub
		return categoryDao.findById(id).orElse(null);
	}

	@Override
	public void deleteCategory(long id) {
		categoryDao.deleteById(id);
		
	}

	@Override
	public List<Category> findAllCategories() {
		// TODO Auto-generated method stub
		 return categoryDao.findAll();
	}

	@Override
	public List<Category> findCategoriesForUser(long id) {
		User user = userDao.findById(id).orElse(null);
		   return user.getCategories();
	}

	@Override
	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		return categoryDao.save(category);
	}

}
