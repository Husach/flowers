import React, { Component } from 'react';
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';

const database = require('./../data/data');

class Order extends Component {
  state = {
    data: {}
  };

  getItem() {
    let { id } = this.props.match.params;
    let item = database.data.find(itm => itm.id == id);
    if(!item) {
      return {};
    }
    return item;
  }

  render() {

    let item = this.getItem.call(this);

    return (
      <div className="page">
        <Header />
        <div className="page-main">
          <div>Ваш заказ:</div>
          <img src={item.src} alt={item.name} width="100px"/>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Order;
