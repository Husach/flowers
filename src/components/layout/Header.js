import React, { Component } from 'react';

import Menu from './../Menu';
import Range from './../Range';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header__wrapper">
          <img src="img/logo.png" alt="logo" className="header__logo" />
          <div className="header__top">
            <Menu />
          </div>
        </div>
        <Range />
      </div>
    )
  }
}

export default Header;
