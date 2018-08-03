import React from "react";
import Btn from "../components/button/Btn.jsx";
import Base from "./Base.jsx";
import Preview from "./Preview.jsx";
import { data } from "../data/Data";

class Order extends Base {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      dataTmp: {},
      amount: 1
    };
  }

  getItem() {
    let { id } = this.props.match.params;
    let item = this.state.data.find(itm => itm.id == id);
    if(!item) return {};
    return item;
  }

  getExtra(city) {
    return data.filter(item => item.category.some((itm) => itm === "sweets") && item.city === city);
  }

  calc(value) {
    if (value === "PLUS") {
      this.setState({
        amount: this.state.amount + 1
      });
    } else if (value === "MINUS") {
      this.setState({
        amount: this.state.amount - 1
      });
    }
  }

  renderAmount() {
    return (
        <div className="calc-block">
          <div className="calc-block__title">Укажите количество</div>

          <div className="calc-block__inner">
            <Btn className="calc-block__btn"
                 label={"-"}
                 onClick={this.calc.bind(this, "MINUS")}
            />

            <div className="calc-block__value">{this.state.amount}</div>

            <Btn className="calc-block__btn"
                 label={"+"}
                 onClick={this.calc.bind(this, "PLUS")}
            />
          </div>
        </div>
    );
  }

  renderExtraBlock() {
    let item = this.getItem.call(this);
    let dataTmp = this.getExtra.call(this, item.city);

    return (
      <div className="order__extra">
        <div className="order__extra-title">Добавить к букету:</div>
        <div className="preview">
          {dataTmp.map((item, index) =>
            <Preview item={item} key={index} />
          )}
        </div>
      </div>
    )
  }

  renderContainer() {
    let item = this.getItem.call(this);

    return (
      <div className="page-main">
        <div className="order__top">
          <img className="order__img" src={item.src} alt={item.name} />
          <div className="order__description">
            <div>Корзина:</div>
            <div>{item.name}</div>
            <div>{item.price} грн.</div>
              {this.renderAmount.call(this)}
          </div>
        </div>
        {this.renderExtraBlock.call(this)}
      </div>
    );
  }
}

export default Order;
