import React from 'react';

import {Input} from 'antd';
import {Menu} from 'antd';

import './Header.css';

const menu = [
  {
    label: 'Search',
    key: 'search',
  },
  {
    label: 'Rated',
    key: 'rated',
  },
];

const Header = () => {
  return (
    <header className="header-app">
      <Menu className="header-app-menu" mode="horizontal" items={menu} selectedKeys={'search'} />
      <Input className="header-app-search" placeholder="Type to Search..." />
    </header>
  );
};
export default Header;
