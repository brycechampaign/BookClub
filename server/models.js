const db = require('../db/index');

module.exports.createUser = async (username, password) => {
  const client = await db.connect();

  return client
    .query('INSERT INTO users (username, password) VALUES ($1, $2)', [
      username,
      password
    ])
    .then(() => client.release())
    .catch(err => {
      client.release();
      throw new Error(err);
    });
};

module.exports.getUserByUsername = async username => {
  const client = await db.connect();

  return client
    .query('SELECT * FROM users WHERE username = $1', [username])
    .then(result => {
      client.release();
      return result.rows[0];
    })
    .catch(err => {
      client.release();
      throw new Error(err);
    });
};

module.exports.createBook = async (
  userId,
  title,
  author,
  genre,
  description
) => {
  const client = await db.connect();
  const query =
    'INSERT INTO books (user_id, title, author, genre, description) VALUES ($1, $2, $3, $4, $5)';

  return client
    .query(query, [userId, title, author, genre, description])
    .then(() => client.release())
    .catch(err => {
      client.release();
      throw new Error(err);
    });
};
