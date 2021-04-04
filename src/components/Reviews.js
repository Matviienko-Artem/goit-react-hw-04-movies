import axios from 'axios';
import React, { Component } from 'react';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const API_KEY = `d407875648143dbc537f3d16fab2b882`;

    const { movieId } = this.props.match.params;

    const searchReviews = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );

    this.setState({ reviews: searchReviews.data.results });

    console.log(this.state.reviews);
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <h2>Это страница отзывов о фильме</h2>
        {reviews.length === 0 && <p>Пока нет отзывов об этом фильме</p>}
        <ul>
          {reviews.map(reviews => (
            <>
              <li key={reviews.id}>
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
