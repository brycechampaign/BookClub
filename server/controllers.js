const {
  createUser,
  getUserByUsername,
  createBook,
  getBooksByUserId,
  removeBookById,
  updateBookColumn
} = require('./models');

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

module.exports.getBooksByUsername = async username => {
  const userId = await getUserByUsername(username).then(user => user.id);
  return await getBooksByUserId(userId);
};

module.exports.deleteBookById = async id => {
  return await removeBookById(id);
};

module.exports.updateTitle = async (id, newTitle) => {
  return await updateBookColumn(id, 'title', newTitle);
};

module.exports.updateAuthor = async (id, newAuthor) => {
  return await updateBookColumn(id, 'author', newAuthor);
};

module.exports.updateGenre = async (id, newGenre) => {
  return await updateBookColumn(id, 'genre', newGenre);
};

module.exports.updateDescription = async (id, newDescription) => {
  return await updateBookColumn(id, 'description', newDescription);
};
