package com.groceryapp.service;

import java.util.List;

import com.groceryapp.entities.Product;

public interface ProductService {

	Product addProductToCategory(Product product, long idCategory);

	Product editProduct(Product product, long id);

	Product findProductById(long id);

	void deleteProduct(long id);

	List<Product> findAllProducts();

	List<Product> findProductsForCategory(long idCategory);

	Product getProduct(long id);

}
