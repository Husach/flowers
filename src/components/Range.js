import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const menu = [
  {
    link: '/bouquet',
    label: 'Букеты'
  },
  {
    link: '/',
    label: 'Композиции'
  },
  {
    link: '/',
    label: 'Поштучно'
  },
  {
    link: '/',
    label: 'Комнатные'
  },
  {
    link: '/sweets',
    label: 'Сладости'
  },
  {
    link: '/',
    label: 'Шары'
  },
  {
    link: '/',
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
    )
  }
}

export default Range;
