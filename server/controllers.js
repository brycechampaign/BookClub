const { createUser, getUserByUsername } = require('./models');

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
