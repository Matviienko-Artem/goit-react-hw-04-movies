import React, { Component } from 'react';
import fetchTheMovie from '../services/themoviedb';
import List from '../components/List/List';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    fetchTheMovie
      .fetchTopWeek()
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
      .catch(() => {
        console.log('Ошибка при запросе топа за неделю');
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h2>ТОП-фильмов за неделю</h2>
        <List movies={movies} />
      </>
    );
  }
}

export default HomePage;
