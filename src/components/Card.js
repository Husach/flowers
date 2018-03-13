import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BtnOrder from './button/BtnOrder';

class Card extends Component {

  render() {
    return (
      <Link className="card" to={`details/${this.props.item.id}`}>
          <div className="card__wrapper">
              <img className="card__img" src={this.props.item.src} alt={this.props.item.name} />
              <div className="card__name">{this.props.item.name}</div>
              <div className="card__price">{this.props.item.price} грн.</div>
              <BtnOrder item={this.props.item} />
          </div>
      </Link>
    );
  }
}

export default Card;
