import React from 'react';

import logo from '../../../assets/images/logo.svg';
import './index.css';

const Header = () => {
  return (
    <header className="UIHeader">
      <img src={logo} className="UIHeader-logo" alt="logo" />
    </header>
  )
};

export default Header;
