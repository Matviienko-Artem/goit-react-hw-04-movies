import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import routes from '../routes';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import styles from '../styles/MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const API_KEY = `d407875648143dbc537f3d16fab2b882`;
    const { movieId } = this.props.match.params;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
      )
      .then(({ data }) => {
        this.setState({ movies: data });
      })
      .catch(error => console.log(`Тут ошибочка ${error}`));
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
        <Route path={`${path}/cast`} render={prop => <Cast {...prop} />} />
        <Route
          path={`${path}/reviews`}
          render={prop => <Reviews {...prop} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
