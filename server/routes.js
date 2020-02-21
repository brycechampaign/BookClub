const router = require('express').Router();
const { addUser } = require('./controllers');

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

module.exports = router;
