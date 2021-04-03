import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const API_KEY = `d407875648143dbc537f3d16fab2b882`;

    const trendingResponse = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    );

    this.setState({ movies: trendingResponse.data.results });
  }

  render() {
    return (
      <>
        <h2>Это домашняя страница</h2>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title}
                {movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
