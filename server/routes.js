const router = require('express').Router();
const {
  addUser,
  authenticateUser,
  addBook,
  getBooksByUsername
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

router.post('/:username/books', (req, res) => {
  const { username } = req.params;
  req.body.username = username;

  addBook(req.body)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

router.get('/:username/books', (req, res) => {
  const { username } = req.params;
  getBooksByUsername(username)
    .then(books => res.send(books))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
