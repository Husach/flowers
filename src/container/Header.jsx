import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "./Social.jsx";
import Range from "../components/Range.jsx";
import Menu from "./Menu.jsx";

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
            <div className="header__content">
              <span className="header__tel">+38 (050) 222-33-55</span>
              <span className="header__tel">+38 (067) 222-33-55</span>
              <img src="img/social/viber.png" alt="viber" className="header__viber" />
            </div>
          </div>
        </div>
        <Range />
        <Social />
      </div>
    );
  }
}

export default Header;
