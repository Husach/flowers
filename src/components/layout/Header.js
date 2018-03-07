import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from './../Menu';
import Range from './../Range';

class Header extends Component {

  render() {
    return (
      <div className="page-header">
        <div className="header">
          <Link to={`/`}>
            <img src="img/logo.png" alt="logo" className="header__logo" />
          </Link>
          <div className="header__top">
            <Menu />
          </div>
        </div>
        <Range />
      </div>
    );
  }
}

export default Header;
