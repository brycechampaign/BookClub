import { authenticateUser } from './api';

const Auth = {
  isAuthenticated: false,
  authenticate(username, password, cb) {
    authenticateUser(username, password).then(() => {
      this.isAuthenticated = true;
      cb();
    });
  },
  signout(cb) {
    this.isAuthenticated = false;
    cb();
  }
};

export default Auth;
