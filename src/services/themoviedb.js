import axios from 'axios';

const API_KEY = `d407875648143dbc537f3d16fab2b882`;

const fetchTopWeek = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  );
};

const fetchBySearch = query => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  );
};

const fetchById = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );
};

const fetchCast = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );
};

const fetchReviews = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
};

export default {
  fetchTopWeek,
  fetchBySearch,
  fetchById,
  fetchCast,
  fetchReviews,
};
