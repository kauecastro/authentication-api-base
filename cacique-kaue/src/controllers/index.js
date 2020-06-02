const usersController = require('./users-controller');
const loginController = require('./login-controller');

module.exports = {
  users: usersController,
  login: loginController
};