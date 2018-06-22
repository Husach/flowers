import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BtnOrder from './button/BtnOrder';

class Card extends Component {

  render() {
    return (
      <div className="card">
          <div className="card__wrapper">
            <Link className="card__info" to={`details/${this.props.item.id}`} >
              <img className="card__img" src={this.props.item.src} alt={this.props.item.name} />
              <div className="card__name">{this.props.item.name}</div>
              <div className="card__price">{this.props.item.price} грн.</div>
            </Link>
            <div className="card__btn">
              <BtnOrder item={this.props.item} />
            </div>
          </div>
      </div>
    );
  }
}

export default Card;
