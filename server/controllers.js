const { createUser } = require('./models');

module.exports.addUser = async (name, password) => {
  return await createUser(name, password);
};
