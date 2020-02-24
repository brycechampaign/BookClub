import Axios from 'axios';

// Retrieve an array of favorite books associated with a user
export const getFavoritesByUser = username => {
  return Axios.get(`/${username}/books`).then(favorites => favorites.data);
};

export const addFavorite = (username, title, author, genre, description) => {
  return Axios.post(`/${username}/books`, {
    title,
    author,
    genre,
    description
  });
};

export const deleteBook = bookId => {
  return Axios.delete(`/books`, {
    params: { bookId }
  });
};

export const editBookProperty = (property, bookId, value) => {
  return Axios.put(`/books/${bookId}/${property}`, {
    [property]: value
  });
};

export const getBookNotes = bookId => {
  return Axios.get(`/books/${bookId}/notes`).then(books => books.data);
};

export const addNote = (bookId, content, page) => {
  return Axios.post(`/books/${bookId}/notes`, {
    content,
    page
  });
};

export const deleteNote = id => {
  return Axios.delete(`/notes/${id}`);
};

export const editNote = (id, page, content) => {
  return Axios.put(`/notes/${id}`, {
    page,
    content
  });
};
