import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const menu = [
  {
    link: '/',
    label: 'Главная'
  },
  {
    link: '/delivery',
    label: 'Доставка и оплата'
  },
  {
    link: '/ourworks',
    label: 'Наши работы'
  },
  {
    link: '/contacts',
    label: 'Контакты'
  },
  {
    link: '/about',
    label: 'О нас'
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
