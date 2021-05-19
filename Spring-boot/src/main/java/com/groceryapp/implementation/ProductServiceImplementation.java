package com.groceryapp.implementation;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.groceryapp.dao.CategoryDao;
import com.groceryapp.dao.ProductDao;
import com.groceryapp.entities.Category;
import com.groceryapp.entities.Product;
import com.groceryapp.service.ProductService;

@Transactional
@Component
public class ProductServiceImplementation implements ProductService {

	@Autowired
	private ProductDao productDao;

	@Autowired
	private CategoryDao categoryDao;

	@Override
	public Product addProductToCategory(Product product, long idCategory) {
		// TODO Auto-generated method stub
		Category category = categoryDao.findById(idCategory).orElse(null);
		category.addProductToCategory(product);
		return productDao.save(product);
	}

	@Override
	public Product editProduct(Product product, long id) {
		// TODO Auto-generated method stub
		Product existProduct = productDao.findById(id).orElse(null);
		existProduct.setName(product.getName());
		existProduct.setDescription(product.getDescription());
		existProduct.setPictureUrl(product.getPictureUrl());
		existProduct.setPrice(product.getPrice());
		return productDao.save(existProduct);
	}

	@Override
	public Product findProductById(long id) {
		// TODO Auto-generated method stub
		return productDao.findById(id).orElse(null);
	}

	@Override
	public void deleteProduct(long id) {
		// TODO Auto-generated method stub
		productDao.deleteById(id);
	}

	@Override
	public List<Product> findAllProducts() {
		// TODO Auto-generated method stub
		return productDao.findAll();
	}

	@Override
	public List<Product> findProductsForCategory(long idCategory) {
		// TODO Auto-generated method stub
		Category category = categoryDao.findById(idCategory).orElse(null);
		return category.getProducts();
	}

	@Override
	public Product getProduct(long id) {
		// TODO Auto-generated method stub
		return productDao.findById(id).orElse(null);
	}

}
