import {useState, useEffect} from 'react';

import {PaginationPages} from '../../ui-components/PaginationPages/PaginationPages';
import MovieCard from '../../ui-components/MovieCard/MovieCard';
import './SearchCard.css';
import MovieService from '../../api/api.js';

const SearchCards = (props) => {
  const {query} = props;
  const [searchFilms, setSearchFilms] = useState({});
  const [contentPage, setContentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const requestSearchFilms = async () => {
      try {
        if (!query) {
          const response = await MovieService.getTrendingMovies(contentPage);
          setSearchFilms(response);
        } else {
          const response = await MovieService.getMovieSearch(query, contentPage);
          setSearchFilms(response);
        }
      } catch (err) {
        console.error('Get data error:', err);
      }
    };

    requestSearchFilms();
  }, [query, contentPage]);

  const startIndex = (contentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedFilms = searchFilms.results ? searchFilms.results.slice(startIndex, endIndex) : [];
  const totalPages = searchFilms.total_results % itemsPerPage;

  return (
    <>
      <ul className="movie-list">
        {displayedFilms.map((item) => (
          <li key={item.id}>
            <MovieCard item={item} />
          </li>
        ))}
      </ul>
      {searchFilms.total_pages > 1 && (
        <PaginationPages contentPage={contentPage} setContentPage={setContentPage} totalPages={totalPages} />
      )}
    </>
  );
};

export default SearchCards;
