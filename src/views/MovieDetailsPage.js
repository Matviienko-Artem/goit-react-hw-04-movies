import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

class MovieDetailsPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const API_KEY = `d407875648143dbc537f3d16fab2b882`;
    const { movieId } = this.props.match.params;

    const searchResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );

    this.setState({ movies: searchResponse.data });

    console.log(this.state.movies);
  }

  render() {
    const { original_title, tagline, poster_path } = this.state.movies;
    const { match } = this.props;

    return (
      <>
        <h2>{original_title}</h2>
        <h3>{tagline}</h3>
        <img src={poster_path} alt={original_title} />
        <Link to={`${match.url}/cast`}>Cast</Link>
        <Link to={`${match.url}/reviews`}>Reviews</Link>
        <Route
          path={`${match.path}/cast`}
          render={prop => <Cast {...prop} />}
        />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
