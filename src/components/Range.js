import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const menu = [
  {
    link: '/shop/tulips',
    label: 'Тюльпаны'
  },
  {
    link: '/shop/roses',
    label: 'Розы'
  },
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
    label: 'Свадебные'
  },
  {
    link: '/shop/indoor',
    label: 'Комнатные'
  },
  {
    link: '/shop/sweets',
    label: 'Сладости'
  }
];

class Range extends Component {

  render() {
    return (
      <div className="range">
        <div className="range__wrapper">
          {menu.map((item, index) =>
            <div className="range__item" key={index}>
              <Link to={item.link}
                    className="range__link"
              >
                {item.label}
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Range;
