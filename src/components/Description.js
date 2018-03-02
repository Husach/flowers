import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const database = require('./../data/bouquet.js');

class Description extends Component {
  state = {
    data: {}
  };

  getItem() {

    let {id} = this.props.params;

    debugger

    let item = database.bouquet.find(itm => itm.id == id);
    if(!item) {
      return {};
    }
    return item;
  }

  render() {
    let item = this.getItem.call(this);

    return (
      <div className="description">
        <img className="description__img" src={item.src} alt={item.name} />
        <div className="description__name">{item.name}</div>
        <div className="description__price">{item.price}</div>
      </div>
    )
  }
}

export default Description;
