import React, { Component } from 'react';

class Card extends Component {

  render() {
    return (
      <div className="card">
        <img className="card__img" src={this.props.item.src} alt={this.props.item.name} />
        <div className="card__name">{this.props.item.name}</div>
        <div className="card__price">{this.props.item.price}</div>
      </div>
    )
  }

}

export default Card;
