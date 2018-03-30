import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BtnOrder from './button/BtnOrder';

const database = require('./../data/data');

class Description extends Component {
  state = {
    data: {}
  };

  getItem() {
    let { id } = this.props.params;
    let item = database.data.find(itm => itm.id == id);
    if(!item) {
      return {};
    }
    return item;
  }

  note(item) {
    if (item.note) {
      return <div className="description__note">{item.note}</div>;
    }
  }

  render() {
    let item = this.getItem.call(this);  

    return (
      <div className="description">
        <img className="description__img" src={item.src} alt={item.name} />
        <div className="description__info">
          <div className="description__name">{item.name}</div>
          <div className="description__price">{item.price} грн.</div>
          <BtnOrder item={item} />
          <div className="description__text">{item.description}</div>
          <div className="description__text"><b>Состав:</b> {item.composition}</div>
          {this.note.call(this, item)}
        </div>
      </div>
    );
  }
}

export default Description;
