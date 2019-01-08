DROP DATABASE IF EXISTS allrecipes;

CREATE DATABASE allrecipes;

use allrecipes;

DROP TABLE IF EXISTS recipes;
		
CREATE TABLE recipes (
  recipeId INTEGER AUTO_INCREMENT,
  recipeName VARCHAR(225),
  userId INTEGER,
  recipeDescription TEXT,
  made INTEGER,
  PRIMARY KEY (recipeId)
);

DROP TABLE IF EXISTS photos;
		
CREATE TABLE photos (
  photoId INTEGER AUTO_INCREMENT,
  photoURL VARCHAR(225),
  userId INTEGER,
  recipeId INTEGER,
  comment TEXT,
  PRIMARY KEY (photoId)
);

DROP TABLE IF EXISTS users;
		
CREATE TABLE users (
  userId INTEGER AUTO_INCREMENT,
  username VARCHAR(50),
  avatarURL VARCHAR(225),
  followers INTEGER,
  favorites INTEGER,
  recipesMade INTEGER,
  PRIMARY KEY (userId)

);

DROP TABLE IF EXISTS reviews;
		
CREATE TABLE reviews (
  reviewId INTEGER AUTO_INCREMENT,
  userId VARCHAR(50),
  recipeId INTEGER,
  rating INTEGER,
  submitDate VARCHAR(50),
  numericDate INTEGER,
  likes INTEGER,
  reviewText TEXT,
  PRIMARY KEY (reviewId)
);
