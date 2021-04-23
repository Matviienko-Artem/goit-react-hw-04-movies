import React, { Component, Suspense, lazy } from 'react';
import { Route, NavLink } from 'react-router-dom';
import fetchTheMovie from '../services/themoviedb';
import routes from '../routes';
import styles from '../styles/MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "cast-page" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "reviews-page" */),
);

class MovieDetailsPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchTheMovie
      .fetchById(movieId)
      .then(({ data }) => {
        this.setState({ movies: data });
      })
      .catch(() => console.log(`Ошибка при запросе по детализации фильма`));
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.home);
  };

  render() {
    const {
      original_title,
      tagline,
      poster_path,
      overview,
      vote_average,
    } = this.state.movies;

    const { url, path } = this.props.match;

    const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <h2 className={styles.title}>{original_title}</h2>
        <h3>
          <i>{tagline}</i>
        </h3>
        <p className={styles.rating}>Rating: {vote_average}</p>
        <div className={styles.box}>
          <img src={imgUrl} alt={original_title} className={styles.poster} />
          <p className={styles.overview}>{overview}</p>
        </div>

        <NavLink
          exact
          to={`${url}/cast`}
          className={styles.link}
          activeClassName={styles.active_link}
        >
          Cast
        </NavLink>
        <NavLink
          exact
          to={`${url}/reviews`}
          className={styles.link}
          activeClassName={styles.active_link}
        >
          Reviews
        </NavLink>
        <Suspense>
          <Route path={`${path}/cast`} component={Cast} />
          <Route path={`${path}/reviews`} component={Reviews} />
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
