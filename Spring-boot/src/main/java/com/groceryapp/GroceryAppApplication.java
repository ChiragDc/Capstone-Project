package com.groceryapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import springfox.documentation.swagger2.annotations.EnableSwagger2;


@SpringBootApplication
@EnableSwagger2
public class GroceryAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(GroceryAppApplication.class, args);
	}
	
}
