import './Header.css';
import {SearchFilm} from '../../ui-components/SearchFilm/SearchFilm';
import {AppMenu} from '../../ui-components/AppMenu/AppMenu';

const Header = (props) => {
  const {menuPage, setMenuPage, query, setQuery} = props;
  if (menuPage === 'rated') {
    return (
      <header className="header-app">
        <AppMenu menuPage={menuPage} setMenuPage={setMenuPage} />
      </header>
    );
  } else {
    return (
      <header className="header-app">
        <AppMenu menuPage={menuPage} setMenuPage={setMenuPage} />
        <SearchFilm query={query} setQuery={setQuery} />
      </header>
    );
  }
};
export default Header;
