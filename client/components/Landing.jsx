import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

const Landing = withRouter(({ history }) => {
  return (
    <div id="landing">
      <h1>Book Club</h1>
      <div id="landing-buttons" className="button-group">
        <button onClick={() => history.push('/login')}>Login</button>
        <button onClick={() => history.push('/signup')}>Sign Up</button>
      </div>
    </div>
  );
});

export default Landing;
