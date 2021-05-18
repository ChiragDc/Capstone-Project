package com.groceryapp.service;

import java.util.List;

import com.groceryapp.entities.Category;

public interface CategoryService {
	
	Category addCategory(Category category);
	
	Category addCategoryToUser(Category category, long idUser);

	Category editCategory(Category category, long id);

	Category findCategoryById(long id);

	void deleteCategory(long id);

	List<Category> findAllCategories();

	List<Category> findCategoriesForUser(long id);

}
