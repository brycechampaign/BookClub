import React, { useState, useEffect } from 'react';
import FavoriteList from './FavoriteList';
import { getFavoritesByUser } from '../api';

const Home = () => {
  const [user, setUser] = useState('bryce');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavoritesByUser(user).then(favorites => setFavorites(favorites));
  }, [user]);

  return (
    <div>
      <h1>
        Welcome Back, <span id="username-header">{user}</span>
      </h1>
      <FavoriteList favorites={favorites} />
    </div>
  );
};

export default Home;
