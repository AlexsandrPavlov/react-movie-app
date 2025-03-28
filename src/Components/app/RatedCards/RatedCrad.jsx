import {useState, useEffect} from 'react';

import {PaginationPages} from '../../ui-components/PaginationPages/PaginationPages';
import MovieCard from '../../ui-components/MovieCard/MovieCard';
import './RatedCard.css';
import MovieService from '../../api/api.js';
import {Loader} from '../../ui-components/loader/Loader';
import {ErrAlert} from '../../ui-components/ErrAlert/ErrAlert.jsx';

const RatedCards = (props) => {
  const {session} = props;
  const [ratedFilms, setRatedFilms] = useState({});
  const [contentPage, setContentPage] = useState(1);
  const itemsPerPage = 6;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const message = 'Nothing found!';
  const type = 'warning';
  const errorVPN = 'You need VPN, check your console browser';

  useEffect(() => {
    const requestFilms = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await MovieService.getMovieRatedMovie(session, contentPage);
        setRatedFilms(response);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    requestFilms();
  }, [session, contentPage]);

  const startIndex = (contentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedFilms = ratedFilms.results ? ratedFilms.results.slice(startIndex, endIndex) : [];
  const totalPages = ratedFilms.total_results % itemsPerPage;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (ratedFilms.results && ratedFilms.results.length === 0) || error ? (
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
          {ratedFilms.total_pages > 1 && (
            <PaginationPages contentPage={contentPage} setContentPage={setContentPage} totalPages={totalPages} />
          )}
        </>
      )}
    </>
  );
};

export default RatedCards;
