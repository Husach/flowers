import React, { Component } from 'react';
import BtnAdd from './button/BtnAdd';

class Preview extends Component {

  render() {
    return (
      <div className="preview__card">
          <img className="preview__img" src={this.props.item.src} alt={this.props.item.name} />
          <div className="preview__name">{this.props.item.name}</div>
          <div className="preview__price">{this.props.item.price} грн.</div>
          <div className="preview__btn">
            <BtnAdd item={this.props.item} />
          </div>
      </div>
    );
  }
}

export default Preview;
