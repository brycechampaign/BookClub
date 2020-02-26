import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import Auth from '../auth';

const Login = () => {
  const [redirectToOverview, setRedirectToOverview] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Authenticate client using credentials and redirect
  // to the overview page
  const login = (username, password) => {
    Auth.authenticate(username, password, () => {
      setRedirectToOverview(true);
    });
  };

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleLogin = e => {
    e.preventDefault();

    // Authenticate client using entered username and password
    login(username, password);
  };

  // Redirect to the overview page when the client is authenticated
  if (redirectToOverview === true) {
    return <Redirect to={`/${username}`} />;
  }

  return (
    <div className="auth-container">
      <form className="card auth-form" onSubmit={e => handleLogin(e)}>
        <h1>Log In</h1>
        <div className="label-input-pair">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            onChange={e => handleUsernameChange(e)}
            value={username}
          />
        </div>

        <div className="label-input-pair">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            onChange={e => handlePasswordChange(e)}
            value={password}
          />
        </div>
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
};

export default Login;
