const router = require('express').Router();
const {
  addUser,
  authenticateUser,
  addBook,
  getBooksByUsername,
  deleteBookById,
  updateTitle,
  updateAuthor,
  updateGenre,
  updateDescription,
  getNotesByBookId,
  addNote,
  updateNoteContent,
  removeNote
} = require('./controllers');

router.post('/users', (req, res) => {
  const { username, password } = req.body;

  // If a username or password is not supplied, respond with an error status
  if (!username || !password) {
    res.sendStatus(400);
  } else {
    addUser(username, password)
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  }
});

// Endpoint for psuedo-authentication
// This is subject to change when genuine authentication is implemented
router.get('/authenticate', (req, res) => {
  const { username, password } = req.query;

  if (!username || !password) {
    res.sendStatus(400);
  } else {
    authenticateUser(username, password)
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(404));
  }
});

// Create a new book associated with a username
router.post('/:username/books', (req, res) => {
  const { username } = req.params;
  req.body.username = username;

  addBook(req.body)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Get a list of books associated with a username
router.get('/:username/books', (req, res) => {
  const { username } = req.params;
  getBooksByUsername(username)
    .then(books => res.send(books))
    .catch(() => res.sendStatus(500));
});

// Delete a book entry by book ID (id query param)
router.delete('/books', (req, res) => {
  const { bookId } = req.query;
  deleteBookById(bookId)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
});

// Edit the title of a book using the book ID (id)
router.put('/books/:id/title', (req, res) => {
  const { id } = req.params;
  const newTitle = req.body.title;

  updateTitle(id, newTitle)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
});

// Edit the author of a book using the book ID (id)
router.put('/books/:id/author', (req, res) => {
  const { id } = req.params;
  const newAuthor = req.body.author;

  updateAuthor(id, newAuthor)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
});

// Edit the genre of a book using the book ID (id)
router.put('/books/:id/genre', (req, res) => {
  const { id } = req.params;
  const newGenre = req.body.genre;

  updateGenre(id, newGenre)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
});

// Edit the description of a book using the book ID (id)
router.put('/books/:id/description', (req, res) => {
  const { id } = req.params;
  const newDescription = req.body.description;

  updateDescription(id, newDescription)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
});

// Retrieve a list of notes associated with a book ID (id)
router.get('/books/:id/notes', (req, res) => {
  const { id } = req.params;

  getNotesByBookId(id)
    .then(books => res.send(books))
    .catch(() => res.sendStatus(500));
});

// Add a note associated with a book ID (id param)
router.post('/books/:id/notes', (req, res) => {
  const { id } = req.params;
  const { content, page } = req.body;

  addNote(id, page, content)
    .then(() => res.send(201))
    .catch(() => res.sendStatus(400));
});

// Edit the page and content of a note using the note ID (id)
router.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const newContent = req.body.content;
  const newPage = req.body.page;

  updateNoteContent(id, newContent, newPage)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
});

// Delete a note using a note ID (id)
router.delete('/notes/:id', (req, res) => {
  const { id } = req.params;

  removeNote(id)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
});

// Wildcard route for routes unknown to the API/server
// All routes not handled by the server will be handled by the
// Router on the client
router.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
