/* Remove tables if they already exist so the schema can be re-written */
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS books CASCADE;

/* Create a user table, schema subject to change as genuine authentication is implemented */
CREATE TABLE users(
  id serial PRIMARY KEY,
  name VARCHAR(255),
  password VARCHAR(255)
);

/* Create books table for storing book metadata */
CREATE TABLE books(
  id serial PRIMARY KEY,
  user_id INT REFERENCES users(id),
  title VARCHAR(255),
  author VARCHAR(255),
  genre VARCHAR(255),
  description VARCHAR(255)
);

/* Create table to store notes associated with books */
CREATE TABLE notes(
  id serial PRIMARY KEY,
  book_id INT REFERENCES books(id),
  page INT,
  contents VARCHAR(255)
)