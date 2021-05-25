package com.groceryapp.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique=true)
	private String username;
	
	private String email;
	
	private String password;
	
	private boolean admin;
	
	@JsonProperty(access = Access.AUTO)
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "user")
	private List<Category> categories;
	
	@JsonProperty(access = Access.AUTO)
	@OneToMany(cascade=CascadeType.MERGE,mappedBy = "user")
	private List<Cart> carts;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	 public User(Long id, String username, String email, String password, boolean admin, List<Category> categories,
			List<Cart> carts) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.admin = admin;
		this.categories = categories;
		this.carts = carts;
	}
	 


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public boolean isAdmin() {
		return admin;
	}


	public void setAdmin(boolean admin) {
		this.admin = admin;
	}


	public List<Category> getCategories() {
		return categories;
	}


	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}


	public List<Cart> getCarts() {
		return carts;
	}


	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}
	
	 @Override
	    public boolean equals(Object o) {
	        if (this == o) return true;
	        if (!(o instanceof User)) return false;
	        User user = (User) o;
	        return Objects.equals(username, user.username) &&
	                Objects.equals(password, user.password);
	    }


	public void addCategoryToUser(Category category) {
		  if (getCategories()==null) {
		   this.categories = new ArrayList<>();
		   }
		   getCategories().add(category);
		   category.setUser(this);
		 }
		   
		 public void addCartToUser(Cart cart) {
		   if(getCarts()==null) {
		    this.carts = new ArrayList<>();	
		   }
		    getCarts().add(cart);
		    cart.setUser(this);
		 }
		    
		 public void removeFromCart(Cart cart) {
		   if (getCarts()!=null) {
		  getCarts().remove(cart);
		  }
		 }
	
	
}
