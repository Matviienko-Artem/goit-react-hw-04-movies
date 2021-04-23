import fetchTheMovie from '../services/themoviedb';
import React, { Component } from 'react';
import styles from '../styles/Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchTheMovie
      .fetchReviews(movieId)
      .then(({ data }) => {
        this.setState({ reviews: data.results });
      })
      .catch(() => console.log(`Тут ошибочка в отзывах о фильме`));
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <h2 className={styles.title}>Это страница отзывов о фильме</h2>
        {reviews.length === 0 && <p>Пока нет отзывов об этом фильме</p>}
        <ul className={styles.list}>
          {reviews.map(reviews => (
            <>
              <li key={reviews.id} className={styles.item}>
                <h3>{reviews.author}</h3>
                <p>{reviews.content}</p>
              </li>
            </>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
