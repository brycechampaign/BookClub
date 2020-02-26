const bcrypt = require('bcrypt');
const {
  createUser,
  getUserByUsername,
  createBook,
  getBooksByUserId,
  removeBookById,
  updateBookColumn,
  getBookNotes,
  createNote,
  updateNoteColumn,
  deleteNoteById
} = require('./models');

const createHash = async password => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

module.exports.addUser = async (username, password) => {
  const hash = await createHash(password);
  return await createUser(username, hash);
};

module.exports.authenticateUser = async (username, password) => {
  const user = await getUserByUsername(username);

  const actualPassword = user ? user.password : null;
  const isValid = await bcrypt.compare(password, actualPassword);

  if (isValid) {
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

module.exports.getNotesByBookId = async id => {
  return await getBookNotes(id);
};

module.exports.addNote = async (bookId, page = null, content) => {
  return await createNote(bookId, page, content);
};

module.exports.updateNoteContent = async (id, newContent, newPage) => {
  return await updateNoteColumn(id, 'content', newContent).then(
    updateNoteColumn(id, 'page', newPage)
  );
};

module.exports.removeNote = async id => {
  return await deleteNoteById(id);
};
