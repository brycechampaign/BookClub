import Axios from 'axios';

// Retrieve an array of favorite books associated with a user
export const getFavoritesByUser = username => {
  return Axios.get(`/${username}/books`).then(favorites => favorites.data);
};
