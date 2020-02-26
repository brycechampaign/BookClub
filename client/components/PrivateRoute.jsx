import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../auth';

// If user is authenticated, render the component
// Otherwise, redirect to the Login page
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
