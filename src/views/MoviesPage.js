import React, { Component } from 'react';
import fetchTheMovie from '../services/themoviedb';
import List from '../components/List/List';
import styles from '../styles/MoviePage.module.css';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.search !== '') {
      this.fetchMoviesBySearch(location.search.slice(7));
    }
  }

  fetchMoviesBySearch = search => {
    if (search !== '') {
      fetchTheMovie
        .fetchBySearch(search)
        .then(({ data }) => {
          this.setState({ movies: data.results });
        })
        .catch(() => {
          console.log('Ошибка при запросе по ключевому слову');
        });
    }
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { location, history } = this.props;
    const { query } = this.state;

    if (query !== '') {
      location.search = `?query=${query}`;
      history.push(location.search);
      this.fetchMoviesBySearch(query);
    }

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
