import React, {Component} from 'react';
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

export default class Header extends Component {
  render() {
    return (
      <div className="header-app">
        <Menu className="header-app-menu" mode="horizontal" items={menu} />
        <Input className="header-app-search" placeholder="Type to Search..." />
      </div>
    );
  }
}
