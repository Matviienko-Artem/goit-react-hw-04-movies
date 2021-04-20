import React, { Component } from 'react';
import axios from 'axios';
import List from '../components/List/List';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const API_KEY = `d407875648143dbc537f3d16fab2b882`;

    axios
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
      .then(({ data }) => {
        this.setState({ movies: data.results });
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
