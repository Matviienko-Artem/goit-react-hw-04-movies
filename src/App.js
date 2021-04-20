import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';
import './styles/global.css';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppBar />
        <div className="box">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route exact path={routes.home} component={HomePage} />
              <Route exact path={routes.movies} component={MoviesPage} />
              <Route path={routes.movieDetails} component={MovieDetailsPage} />
              <Route component={HomePage} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default App;
