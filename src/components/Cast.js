import axios from 'axios';
import React, { Component } from 'react';

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

    console.log(this.props);
  }

  render() {
    return (
      <>
        <h2>Это страница актерского состава</h2>
        <ul>
          {this.state.cast.map(actors => (
            <>
              <li key={actors.id}>
                {actors.name}
                <img src={actors.profile_path} alt={actors.name} />
              </li>
            </>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
