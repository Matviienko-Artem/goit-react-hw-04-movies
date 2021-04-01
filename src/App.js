import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './views/Cast';
import Reviews from './views/Reviews';

class App extends Component {
  state = {};

  //const MY_KEY = `?api_key=d407875648143dbc537f3d16fab2b882`;

  // https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

  fetchApi() {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=d407875648143dbc537f3d16fab2b882',
      )
      .then(response => console.log(response));
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/movies/id" component={MovieDetailsPage} />
        <Route path="/movies/id/cast" component={Cast} />
        <Route path="/movies/id/reviews" component={Reviews} />
      </div>
    );
  }
}

export default App;
