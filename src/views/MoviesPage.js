import React, { Component } from 'react';
import axios from 'axios';
import List from '../components/List/List';
import styles from '../styles/MoviePage.module.css';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  fetchMovies = () => {
    const API_KEY = `d407875648143dbc537f3d16fab2b882`;
    const QUERY = this.state.query;

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${QUERY}`,
      )
      .then(({ data }) => {
        this.setState({ movies: data.results });
      });
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.fetchMovies();

    this.setState({ query: '' });
  };

  render() {
    const { movies, query } = this.state;

    return (
      <>
        <h2>Поиск фильма по названию</h2>
        <form onSubmit={this.handleSubmit} className={styles.Searchbar}>
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Начните поиск фильма"
            className={styles.SearchForm}
          ></input>
          <button type="submit" className={styles.SearchForm_button}>
            <span></span>
          </button>
        </form>
        <List movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
