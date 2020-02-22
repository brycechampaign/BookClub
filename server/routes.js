const router = require('express').Router();
const { addUser, authenticateUser } = require('./controllers');

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

module.exports = router;
