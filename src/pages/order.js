import React, { Component } from 'react';
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';
import Btn from "../components/button/Btn";

import { data } from './../data/data';
import Card from './../components/Card';
import Preview from './../components/Preview';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            dataTmp: {},
            amount: 0
        };
    }

  getItem() {
    let { id } = this.props.match.params;
    let item = this.state.data.find(itm => itm.id == id);
    if(!item) {
      return {};
    }
    return item;
  }

  getExtra(city) {
    return data.filter(item => item.category.some((itm) => itm === 'sweets') && item.city === city);
  }

  calc() {
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
    let dataTmp = this.getExtra.call(this, item.city);

    return (
      <div className="page">
        <Header />
        <div className="page-main">
          <div className="order__top">
            <img className="order__img" src={item.src} alt={item.name} />
            <div className="order__description">
              <div>Корзина:</div>
              <div>{item.name}</div>
              <div>{item.price} грн.</div>
            </div>
          </div>
          <div className="order__extra">
            <div className="order__extra-title">Добавить к букету:</div>
            <div className="preview">
              {dataTmp.map((item, index) =>
                  <Preview item={item} key={index} />
              )}
            </div>
          </div>
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
