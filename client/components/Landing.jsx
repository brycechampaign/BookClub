import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

// Landing page which contains Login and Signup buttons
const Landing = withRouter(({ history }) => {
  return (
    <div id="landing">
      <h1>Book Club</h1>
      <div id="landing-buttons" className="button-group">
        {/* Redirects to Login page when clicked */}
        <button onClick={() => history.push('/login')}>Login</button>

        {/* Redirects to Signup page when clicked */}
        <button onClick={() => history.push('/signup')}>Sign Up</button>
      </div>
    </div>
  );
});

export default Landing;
