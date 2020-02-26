import React, { useState, useEffect } from 'react';
import FavoriteList from './FavoriteList';
import { getFavoritesByUser } from '../api';
import { useParams } from 'react-router-dom';

const Overview = () => {
  // set user to value of "user" URL parameter
  const [user, setUser] = useState(useParams().user);
  const [favorites, setFavorites] = useState([]);

  // Update the list of favorite books to display based on current user
  const updateFavorites = () => {
    return getFavoritesByUser(user).then(favorites => setFavorites(favorites));
  };

  // Update the favorites list data when the user changes
  useEffect(() => {
    updateFavorites();
  }, [user]);

  return (
    <div id="overview-body">
      <h1>
        Welcome Back, <span id="username-header">{user}</span>
      </h1>
      <FavoriteList
        favorites={favorites}
        user={user}
        updateFavorites={updateFavorites}
      />
    </div>
  );
};

export default Overview;
