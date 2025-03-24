import {useState} from 'react';

import './App.css';
import SearchCards from './Components/app/SearchCards/SearchCard';
import Footer from './Components/app/Footer/Footer';
import Header from './Components/app/Header/Header';

export default function App() {
  const [query, setQuery] = useState('');
  const [menuPage, setMenuPage] = useState('search');

  return (
    <>
      <Header menuPage={menuPage} setMenuPage={setMenuPage} query={query} setQuery={setQuery} />
      <SearchCards query={query} />
      <Footer />
    </>
  );
}
