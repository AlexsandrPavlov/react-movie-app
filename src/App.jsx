import React from 'react';

import './App.css';
import Header from './Components/ui-components/Header/Header';

import SearchCards from './Components/app/SearchCards/SearchCard';
import Footer from './Components/ui-components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <SearchCards />
      <Footer />
    </>
  );
}
