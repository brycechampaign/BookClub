import React, { useState, useEffect } from 'react';
import FavoriteList from './FavoriteList';
import { getFavoritesByUser } from '../api';
import { useParams } from 'react-router-dom';

const Overview = () => {
  const [user, setUser] = useState(useParams().user);
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = () => {
    return getFavoritesByUser(user).then(favorites => setFavorites(favorites));
  };

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
