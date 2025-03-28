import {useState, useEffect} from 'react';

import './App.css';
import {Screen} from './Components/app/Screen';
import Header from './Components/app/Header/Header';
import MovieService from './Components/api/api.js';
import {GenresContext} from './Components/utils/GenreContext.js';

export default function App() {
  const [query, setQuery] = useState('');
  const [menuPage, setMenuPage] = useState('search');
  const [genres, setGenres] = useState({});
  const [session, setSession] = useState(null);
  const SESSION_EXPIRATION_TIME = 3600000;

  useEffect(() => {
    const requestSession = async () => {
      try {
        const storedSessionId = localStorage.getItem('guest_session_id');
        const sessionCreationTime = localStorage.getItem('session_creation_time');

        const currentTime = Date.now();

        if (storedSessionId && sessionCreationTime) {
          if (currentTime - sessionCreationTime < SESSION_EXPIRATION_TIME) {
            setSession(storedSessionId);
          } else {
            localStorage.removeItem('guest_session_id');
            localStorage.removeItem('session_creation_time');
          }
        }

        if (!storedSessionId) {
          const res = await MovieService.getSessionId();
          setSession(res.guest_session_id);
          localStorage.setItem('guest_session_id', res.guest_session_id);
          localStorage.setItem('session_creation_time', currentTime);
        }
      } catch (err) {
        console.error('Get data error:', err);
      }
    };

    requestSession();
  }, []);

  useEffect(() => {
    const requestGenres = async () => {
      try {
        const response = await MovieService.getGenreMovie();
        setGenres(response.genres);
      } catch (err) {
        console.error('Get data error:', err);
      }
    };

    requestGenres();
  }, []);

  return (
    <>
      <Header menuPage={menuPage} setMenuPage={setMenuPage} query={query} setQuery={setQuery} />
      <GenresContext.Provider value={{genres}}>
        <Screen menuPage={menuPage} query={query} session={session} />
      </GenresContext.Provider>
    </>
  );
}
