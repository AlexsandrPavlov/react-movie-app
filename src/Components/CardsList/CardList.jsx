import React, {Component} from 'react';

import MovieCard from '../MovieCard/MovieCard';
import './CardList.css';

export default class CardList extends Component {
  render() {
    return (
      <div className="movie-app-list">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    );
  }
}
