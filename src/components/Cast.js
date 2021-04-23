import fetchTheMovie from '../services/themoviedb';
import React, { Component } from 'react';
import styles from '../styles/Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchTheMovie
      .fetchCast(movieId)
      .then(({ data }) => {
        this.setState({ cast: data.cast });
      })
      .catch(() => console.log(`Тут ошибочка в касте актёров `));
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
