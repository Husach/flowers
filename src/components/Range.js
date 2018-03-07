import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const menu = [
  {
    link: '/shop/bouquet',
    label: 'Букеты'
  },
  {
    link: '/shop/compositions',
    label: 'Композиции'
  },
  {
    link: '/shop/wedding',
    label: 'Для свадьбы'
  },
  {
    link: '/shop/piece',
    label: 'Поштучно'
  },
  {
    link: '/shop/indoor',
    label: 'Комнатные'
  },
  {
    link: '/shop/sweets',
    label: 'Сладости'
  },
  {
    link: '/shop/balloons',
    label: 'Шары'
  },
  {
    link: '/shop/toys',
    label: 'Игрушки'
  }
];

class Range extends Component {

  render() {
    return (
      <div className="range">
        <div className="range__wrapper">
          {menu.map((item, index) =>
            <div className="range__item" key={index}>
              <Link to={item.link} className="range__link">{item.label}</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Range;
