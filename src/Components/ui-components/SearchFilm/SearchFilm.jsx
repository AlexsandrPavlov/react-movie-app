import {useState, useEffect} from 'react';

import {Input} from 'antd';
import './SearchFilm.css';
export const SearchFilm = (props) => {
  const {query, setQuery} = props;
  const [value, setValue] = useState(query);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value.trim());
  };

  useEffect(() => {
    setQuery(value);
  }, [setQuery, value]);

  return (
    <Input
      className="header-app-search"
      placeholder="Type to Search..."
      defaultValue={value}
      onChange={(e) => handleChange(e)}
    />
  );
};
