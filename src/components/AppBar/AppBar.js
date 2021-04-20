import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.home}
            className={styles.link}
            activeClassName={styles.active_link}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={routes.movies}
            className={styles.link}
            activeClassName={styles.active_link}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default AppBar;
