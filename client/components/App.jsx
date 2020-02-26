import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';
import Overview from './Overview';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Signup from './Signup';
import Auth from '../auth';
import Landing from './Landing';

const SignoutButton = withRouter(({ history }) => (
  <a
    id="signout"
    className="navbar-item"
    onClick={() => {
      Auth.signout(() => history.push('/'));
    }}
  >
    Sign out
  </a>
));

const NavBar = withRouter(() =>
  Auth.isAuthenticated ? (
    <div id="navbar">
      <SignoutButton />
    </div>
  ) : (
    <div id="navbar">
      <Link to="/" className="navbar-item">
        <p>Book Club</p>
      </Link>
      <Link to="/signup" className="navbar-item">
        Signup
      </Link>
      <Link to="/:user" className="navbar-item">
        Login
      </Link>
    </div>
  )
);

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/:user" component={Overview} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
