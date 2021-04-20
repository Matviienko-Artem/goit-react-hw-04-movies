import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';
import './styles/global.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppBar />
        <div className="box">
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />

            <Route component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
