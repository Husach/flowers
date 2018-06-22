import React, { Component } from 'react';
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';
import Btn from "../components/button/Btn";

const database = require('./../data/data');

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            amount: 0
        };
    }

  getItem() {
    let { id } = this.props.match.params;
    let item = database.data.find(itm => itm.id == id);
    if(!item) {
      return {};
    }
    return item;
  }

  calc() {
    debugger

    this.setState({
        amount: this.state.amount - 1
    })
  }

  renderAmount() {
    return (
        <div>
          <Btn label={"-"}
               onClick={this.calc.bind(this)}
          />
          <div>{this.state.amount}</div>
          <Btn label={"+"} />
        </div>
    )
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
            {this.renderAmount.call(this)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Order;
