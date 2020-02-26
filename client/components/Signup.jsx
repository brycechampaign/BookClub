import React, { useState } from 'react';
import Auth from '../auth';
import { createUser } from '../api';
import { Redirect } from 'react-router-dom';

const Signup = () => {
  const [redirectToOverview, setredirectToOverview] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (username, password) => {
    Auth.authenticate(username, password, () => {
      setredirectToOverview(true);
    });
  };

  const handleSignup = e => {
    e.preventDefault();

    // Create a new user, log them in, and redirect to Overview page
    createUser(username, password).then(() => login(username, password));
  };

  // Redirect to overview page if the user is logged in
  if (redirectToOverview === true) {
    return <Redirect to={`/${username}`} />;
  }

  return (
    <div className="auth-container">
      <form className="card auth-form" onSubmit={e => handleSignup(e)}>
        <h1>Create an Account</h1>

        <div className="label-input-pair">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <div className="label-input-pair">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Signup;
