DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INTEGER(255) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(25) NULL,
  department VARCHAR(25) NULL,
  price DECIMAL (10,2) NULL,
  stock_qty INTEGER (255),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department, price, stock_qty)
VALUES ("Bicycle", "Sports", 450.00, 100);

INSERT INTO products (product_name, department, price, stock_qty)
VALUES ("Toaster", "Kitchen", 20.00, 100);

INSERT INTO products (product_name, department, price, stock_qty)
VALUES ("Macbook Pro", "Computers", 99.99, 3);

INSERT INTO products (product_name, department, price, stock_qty)
VALUES ("Drive DVD", "Movies", 8.79, 20);

INSERT INTO products (product_name, department, price, stock_qty)
VALUES ("Drone", "Electronics", 200.00, 25);

INSERT INTO products (product_name, department, price, stock_qty)
VALUES ("Sacha Juan", "Beauty", 25.00, 15);

INSERT INTO products (product_name, department, price, stock_qty)
VALUES ("'My Life in Code' Book", "Books", 16.75, 80);

INSERT INTO products (product_name, department, price, stock_qty)
VALUES ("Yoga Mat", "Sports", 45.00, 100);

INSERT INTO products (product_name, department, price, stock_qty)
VALUES ("volleyball", "Sports", 12.00, 150);

INSERT INTO products (product_name, department, price, stock_qty)
VALUES ("Effective Python", "Books", 24.99, 100);

INSERT INTO products (product_name, department, price, stock_qty)
VALUES ("Snorkel Set", "Sports", 45.00, 30);
