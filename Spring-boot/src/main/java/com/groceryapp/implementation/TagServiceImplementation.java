package com.groceryapp.implementation;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.groceryapp.dao.ProductDao;
import com.groceryapp.dao.TagDao;
import com.groceryapp.entities.Product;
import com.groceryapp.entities.Tag;
import com.groceryapp.service.TagService;

@Transactional
@Component
public class TagServiceImplementation implements TagService {

	@Autowired
	private TagDao tagDao;

	@Autowired
	private ProductDao productDao;

	@Override
	public void addTagToProduct(long idProduct, long idTag) {
		// TODO Auto-generated method stub
		Product product = productDao.findById(idProduct).orElse(null);
		Tag tag = tagDao.findById(idTag).orElse(null);
		tag.addProductToTag(product);
		product.addTag(tag);

	}

	@Override
	public List<Tag> findTagsForProduct(long idProduct) {
		// TODO Auto-generated method stub
		Product product = productDao.findById(idProduct).orElse(null);
		return product.getTags();
	}

	@Override
	public List<Tag> findAllTags() {
		// TODO Auto-generated method stub
		return tagDao.findAll();
	}

	@Override
	public void deleteTagFromProduct(long idTag, long idProduct) {
		// TODO Auto-generated method stub
		Product product = productDao.findById(idProduct).orElse(null);
		Tag tag = tagDao.findById(idTag).orElse(null);
		product.getTags().remove(tag);
	}

	@Override
	public Tag addTag(Tag tag) {
		// TODO Auto-generated method stub
		return tagDao.save(tag);
	}

	@Override
	public void deleteTag(long id) {
		// TODO Auto-generated method stub
		tagDao.deleteById(id);
	}

	@Override
	public Tag findTagById(long id) {
		// TODO Auto-generated method stub
		return tagDao.findById(id).orElse(null);
	}

	@Override
	public List<Product> findProductsForTag(long idTag) {
		// TODO Auto-generated method stub
		Tag tag = tagDao.findById(idTag).orElse(null);
		return tag.getProducts();
	}

}
