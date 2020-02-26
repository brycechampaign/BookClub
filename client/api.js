import Axios from 'axios';

// Retrieve an array of favorite books associated with a user
export const getFavoritesByUser = username => {
  return Axios.get(`/${username}/books`).then(favorites => favorites.data);
};

// Add a book to a user's favorite list
// This sends a request to the server to add a new book
// entry associated with the input username with the input
// metadata (title, author, genre, description)
export const addFavorite = (username, title, author, genre, description) => {
  return Axios.post(`/${username}/books`, {
    title,
    author,
    genre,
    description
  });
};

// Remove a book with the input book ID (bookId) from the database
export const deleteBook = bookId => {
  return Axios.delete(`/books`, {
    params: { bookId }
  });
};

// Edit a property associated with the input book ID (bookId) with the
// value of the value argument
export const editBookProperty = (property, bookId, value) => {
  return Axios.put(`/books/${bookId}/${property}`, {
    [property]: value
  });
};

// Get the notes associated with a passed-in book ID (bookId)
export const getBookNotes = bookId => {
  return Axios.get(`/books/${bookId}/notes`).then(books => books.data);
};

// Create a new note associated with the given book ID (bookId) with the
// passed in page number (page) and content (content) values
export const addNote = (bookId, content, page) => {
  if (page === '') page = null;

  return Axios.post(`/books/${bookId}/notes`, {
    content,
    page
  });
};

// Remove a note assocaited with the passed in note ID (id)
export const deleteNote = id => {
  return Axios.delete(`/notes/${id}`);
};

// Edit a note associated with the passed in ID (id)
export const editNote = (id, page, content) => {
  return Axios.put(`/notes/${id}`, {
    page,
    content
  });
};

// Authenticate a user by checking the username and password
// against those in the database. If the username and password
// are valid, the response will contain "true" in the body. Otherwise,
// an error status code will be recieved
export const authenticateUser = (username, password) => {
  return Axios.get('/authenticate', {
    params: {
      username,
      password
    }
  });
};

// Add a new user to the database with the passed-in username and password
export const createUser = (username, password) => {
  return Axios.post('/users', {
    username,
    password
  });
};
