import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const API_KEY = `d407875648143dbc537f3d16fab2b882`;
    const QUERY = `jack`;

    const searchResponse = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${QUERY}`,
    );

    this.setState({ movies: searchResponse.data.results });
  }

  render() {
    return (
      <>
        <h2>Это страница для поиска</h2>
        <form>
          <input></input>
        </form>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
