DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS books CASCADE;

CREATE TABLE users(
  id serial PRIMARY KEY,
  name VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE books(
  id serial PRIMARY KEY,
  user_id INT REFERENCES users(id),
  name VARCHAR(255),
  author VARCHAR(255),
  genre VARCHAR(255),
  description VARCHAR(255)
);

CREATE TABLE notes(
  id serial PRIMARY KEY,
  book_id INT REFERENCES books(id),
  page INT,
  contents VARCHAR(255)
)