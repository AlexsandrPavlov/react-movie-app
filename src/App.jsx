import {useState} from 'react';

import './App.css';
import {Screen} from './Components/app/Screen';
import Header from './Components/app/Header/Header';

export default function App() {
  const [query, setQuery] = useState('');
  const [menuPage, setMenuPage] = useState('search');

  return (
    <>
      <Header menuPage={menuPage} setMenuPage={setMenuPage} query={query} setQuery={setQuery} />
      <Screen menuPage={menuPage} query={query} />
    </>
  );
}
