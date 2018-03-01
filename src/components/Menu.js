import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const menu = [
  {
    link: '/',
    label: 'Home'
  },
  {
    link: '/catalog',
    label: 'Catalog'
  },
  {
    link: '/about',
    label: 'About us'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  }
];

class Menu extends Component {

  render() {
    return (
      <div className="menu">
          {menu.map((item, index) =>
            <div className="menu__item" key={index}>
              <Link to={item.link} className="menu__link">{item.label}</Link>
            </div>
          )}
      </div>
    )
  }
}

export default Menu;
