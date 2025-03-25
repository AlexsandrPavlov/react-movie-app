import {useState, useEffect} from 'react';

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
  const message = 'Nothing found!';
  const type = 'warning';

  useEffect(() => {
    const requestSearchFilms = async () => {
      setLoading(true);

      try {
        if (!query && !initialFetchDone) {
          const response = await MovieService.getTrendingMovies(contentPage);
          setSearchFilms(response);
          setInitialFetchDone(true);
        } else if (query) {
          const response = await MovieService.getMovieSearch(query, contentPage);
          setSearchFilms(response);
        }
      } catch (err) {
        console.error('Ошибка получения данных:', err);
      } finally {
        setLoading(false);
      }
    };

    requestSearchFilms();
  }, [query, contentPage, initialFetchDone]);

  const startIndex = (contentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedFilms = searchFilms.results ? searchFilms.results.slice(startIndex, endIndex) : [];
  const totalPages = searchFilms.total_results % itemsPerPage;

  return (
    <>
      {loading ? (
        <Loader />
      ) : searchFilms.results && searchFilms.results.length === 0 ? ( // Проверка на пустой массив
        <ErrAlert message={message} type={type} />
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
