import React from 'react';
import MovieCard from '../../ui-components/MovieCard/MovieCard';
import './SearchCard.css';

const SearchCards = () => {
  return (
    <>
      <ul className="movie-list">
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
      </ul>
    </>
  );
};

export default SearchCards;
