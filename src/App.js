import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
// import axios from 'axios';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />

          <Route component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
