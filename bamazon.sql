--Drops bamazon db if it exists, creates bamazon db, uses bamazon db
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

--Creates Products table --
CREATE TABLE products (
	item_id INTEGER(5) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

--Inserts mock data into table--
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Apples', 'Groceries', 1.00, 1000),
		('Granola Bars', 'Groceries', 6.25, 400),
		('Charmin', 'Household', 8.99, 800),
		('Pima Cotton Polo', 'Clothing', 49.99, 250),
		('Silk Long Underwear', 'Clothing', 35.00, 100),
		('Emerald Bracelet', 'Jewelry', 575.00, 15),
		('Lenovo Laptop', 'Technology', 1200.00, 33),
		('Playstation 4', 'Technology', 399.99, 45),
		('Diamond Ring', 'Jewelry', 800.00, 12),
		('Lysol Wipes', 'Household', 2.75, 1500);