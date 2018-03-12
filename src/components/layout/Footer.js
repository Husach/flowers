import React, { Component } from 'react';

import Menu from './../Menu';
import Range from './../Range';
import Social from './../Social';

class Footer extends Component {

  render() {
    return (
      <div className="page-footer">
        <div className="footer__wrapper">
          <div className="footer__item">
            <Menu />
          </div>
          <div className="footer__item">
            <Range />
          </div>
          <div className="footer__item">
            <div className="footer__phone">
              <span>+38 (050) 222-33-55</span>
              <span>+38 (067) 222-33-55</span>
            </div>
            <div className="footer__social">
              <Social />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
