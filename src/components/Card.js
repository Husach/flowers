import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { blue200 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';


const btnStyle = {
  width: 240,
  marginBottom: 10
}

class Card extends Component {

  render() {
    return (
      <Link className="card" to={`details/${this.props.item.id}`}>
        <div className="card__wrapper">
          <img className="card__img" src={this.props.item.src} alt={this.props.item.name} />
          <div className="card__name">{this.props.item.name}</div>
          <div className="card__price">{this.props.item.price}</div>
          <RaisedButton
              label="Заказать"
              className="card__btn"
              backgroundColor={blue200}
              style={btnStyle} />
          <RaisedButton
              label="Подробнее"
              className="card__btn"
              style={btnStyle} />
        </div>
      </Link>
    )
  }
}

export default Card;
