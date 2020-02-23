import React, { useState, useEffect } from 'react';
import FavoriteList from './FavoriteList';
import { getFavoritesByUser } from '../api';

const Home = () => {
  const [user, setUser] = useState('bryce');
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = () => {
    return getFavoritesByUser(user).then(favorites => setFavorites(favorites));
  };

  useEffect(() => {
    updateFavorites();
  }, [user]);

  return (
    <div>
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

export default Home;
