import { authenticateUser } from './api';

const Auth = {
  isAuthenticated: false,
  authenticate(username, password, cb) {
    // Send request to server to authenticate the client
    // using the entered credentials
    authenticateUser(username, password).then(() => {
      // Update authentication status
      this.isAuthenticated = true;
      cb();
    });
  },
  signout(cb) {
    // Reset authentication status
    this.isAuthenticated = false;
    cb();
  }
};

export default Auth;
