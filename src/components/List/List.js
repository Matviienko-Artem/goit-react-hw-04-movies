import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from '../List/List.module.css';

const List = ({ movies, location, query }) => {
  console.log(query)
  return (
    <ul className={styles.list}>
      {movies.map(({ id, title, name, poster_path }) => (
        <li key={id} className={styles.item}>
          <Link
            to={{ pathname: `/movies/${id}`, search:`?query=${query}`, state: { from: location } }}
            className={styles.link}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              className={styles.img}
            />
            <p>{title}</p>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(List);
