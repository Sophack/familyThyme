DROP DATABASE IF EXISTS recipesDB;


CREATE DATABASE recipesDB;
USE recipesDB;

CREATE TABLE IF NOT EXISTS recipes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  directions TEXT NOT NULL
);