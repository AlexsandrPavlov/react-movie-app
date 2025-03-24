import React from 'react';

import './Footer.css';

const Footer = () => {
  return <footer className="footer-app">© {new Date().getFullYear()}</footer>;
};

export default Footer;
