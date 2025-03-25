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
        <Screen menuPage={menuPage} query={query} />
      </GenresContext.Provider>
    </>
  );
}
