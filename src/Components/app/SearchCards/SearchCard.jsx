import {useState, useEffect} from 'react';

import {debounce} from 'lodash';
import {PaginationPages} from '../../ui-components/PaginationPages/PaginationPages';
import MovieCard from '../../ui-components/MovieCard/MovieCard';
import './SearchCard.css';
import MovieService from '../../api/api.js';
import {Loader} from '../../ui-components/loader/Loader';
import {ErrAlert} from '../../ui-components/ErrAlert/ErrAlert.jsx';

const SearchCards = (props) => {
  const {query} = props;
  const [searchFilms, setSearchFilms] = useState({});
  const [contentPage, setContentPage] = useState(1);
  const itemsPerPage = 6;
  const [initialFetchDone, setInitialFetchDone] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const message = 'Nothing found!';
  const type = 'warning';
  const errorVPN = 'You need VPN, check your console browser';

  useEffect(() => {
    const requestSearchFilms = debounce(async () => {
      setLoading(true);
      setError(false);

      try {
        if (!query && !initialFetchDone) {
          const response = await MovieService.getTrendingMovies(contentPage);
          setSearchFilms(response);
          setInitialFetchDone(true);
        } else if (query) {
          const response = await MovieService.getMovieSearch(query, contentPage);
          setSearchFilms(response);
        }
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 600);

    requestSearchFilms();

    return () => {
      requestSearchFilms.cancel();
    };
  }, [query, contentPage, initialFetchDone]);

  const startIndex = (contentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedFilms = searchFilms.results ? searchFilms.results.slice(startIndex, endIndex) : [];
  const totalPages = searchFilms.total_results % itemsPerPage;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (searchFilms.results && searchFilms.results.length === 0) || error ? (
        <ErrAlert message={error ? errorVPN : message} type={type} />
      ) : (
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
      )}
    </>
  );
};

export default SearchCards;
