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

// Create a hash from a plaintext password
const createHash = async password => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

// Create a new user with input username and password
module.exports.addUser = async (username, password) => {
  const hash = await createHash(password);
  return await createUser(username, hash);
};

// Returns true if an entered username and password are valid
module.exports.authenticateUser = async (username, password) => {
  // get user entry from DB
  const user = await getUserByUsername(username);

  // If the user has no entry in the DB, password is set to null
  const actualPassword = user ? user.password : null;

  // compare plaintext password against hashed password from user DB entry
  const isValid = await bcrypt.compare(password, actualPassword);

  if (isValid) {
    return true;
  } else {
    throw new Error('Invalid username or password');
  }
};

// Add a book entry to the database
module.exports.addBook = async ({
  username,
  title,
  author,
  genre,
  description
}) => {
  // get user ID from DB using username argument
  const userId = await getUserByUsername(username)
    .then(user => user.id)
    .catch(err => {
      throw new Error(err);
    });

  // create a new book entry associated with retrieved user ID
  return await createBook(userId, title, author, genre, description);
};

module.exports.getBooksByUsername = async username => {
  // get user ID from DB using username argument
  const userId = await getUserByUsername(username).then(user => user.id);
  return await getBooksByUserId(userId);
};

// Remove a book entry from the database
module.exports.deleteBookById = async id => {
  return await removeBookById(id);
};

// Update a book entry's title column
// id parameter refers to the book's ID
module.exports.updateTitle = async (id, newTitle) => {
  return await updateBookColumn(id, 'title', newTitle);
};

// Update a book entry's author column
module.exports.updateAuthor = async (id, newAuthor) => {
  return await updateBookColumn(id, 'author', newAuthor);
};

// Update a book entry's genre column
module.exports.updateGenre = async (id, newGenre) => {
  return await updateBookColumn(id, 'genre', newGenre);
};

// update a book entry's description column
module.exports.updateDescription = async (id, newDescription) => {
  return await updateBookColumn(id, 'description', newDescription);
};

// Returns a list of notes associated with a book ID (id)
module.exports.getNotesByBookId = async id => {
  return await getBookNotes(id);
};

// Create a new note entry associated with a book
module.exports.addNote = async (bookId, page = null, content) => {
  return await createNote(bookId, page, content);
};

// Update the content and page columns of a note
module.exports.updateNoteContent = async (id, newContent, newPage) => {
  return await updateNoteColumn(id, 'content', newContent).then(
    updateNoteColumn(id, 'page', newPage)
  );
};

// Delete a note entry from the database using the note ID (id)
module.exports.removeNote = async id => {
  return await deleteNoteById(id);
};
