const { createUser, getUserByUsername, createBook } = require('./models');

module.exports.addUser = async (username, password) => {
  return await createUser(username, password);
};

module.exports.authenticateUser = async (username, password) => {
  const user = await getUserByUsername(username);

  const actualPassword = user ? user.password : null;

  if (actualPassword === password) {
    return true;
  } else {
    throw new Error('Invalid username or password');
  }
};

module.exports.addBook = async ({
  username,
  title,
  author,
  genre,
  description
}) => {
  const userId = await getUserByUsername(username)
    .then(user => user.id)
    .catch(err => {
      throw new Error(err);
    });

  return await createBook(userId, title, author, genre, description);
};
