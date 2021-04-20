import axios from 'axios';
import React, { Component } from 'react';
import styles from '../styles/Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const API_KEY = `d407875648143dbc537f3d16fab2b882`;

    const { movieId } = this.props.match.params;

    const searchReviews = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );

    this.setState({ cast: searchReviews.data.cast });

    console.log(this.state.cast);
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        <h2 className={styles.title}>Это страница актерского состава</h2>
        <ul className={styles.box}>
          {cast.map(actor => {
            const actorsImg = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

            return (
              <>
                <li key={actor.id} className={styles.item}>
                  <p>{actor.name}</p>
                  <img
                    src={actorsImg}
                    alt={actor.name}
                    className={styles.img}
                  />
                </li>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
