import React, {Component} from 'react';

import {Pagination} from 'antd';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return <Pagination defaultCurrent={1} total={50} pageSize={6} />;
  }
}
