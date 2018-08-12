import React from "react";
import Btn from "../components/button/index.jsx";
import Base from "./Base.jsx";
import Preview from "./Preview.jsx";
import { data } from "../data/Data";
import BtnIconClear from "../components/button/BtnIconClear";

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
        let item = this.state.data.find(itm => itm.id === id);
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
            if (this.state.amount === 1) return null;
            this.setState({
                amount: this.state.amount - 1
            });
        }
    }

    renderAmount() {
        return (
            <div className="calc">
                <Btn
                    className="calc__btn"
                    label={"-"}
                    onClick={this.calc.bind(this, "MINUS")}
                />
                <div className="calc__value">{this.state.amount}</div>
                <Btn
                    className="calc__btn"
                    label={"+"}
                    onClick={this.calc.bind(this, "PLUS")}
                />
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

    renderOrderItem() {
        let item = this.getItem.call(this);

        return (
            <div className="order__item">
                <img
                    className="order__item-img"
                    src={item.src}
                    alt={item.name}
                />
                <div className="order__item-name">{item.name}</div>
                {this.renderAmount.call(this)}
                <div className="order__item-cost">{item.price} грн.</div>
                <BtnIconClear />
            </div>
        )
    }

    renderPost() {
        return (
            <div className="order__item order__item--post-card">
                <img
                    className="order__item-img"
                    src="img/post-card.jpg"
                    alt="bonus_card"
                />
                <div className="order__item-name">Поздравительнная открытка</div>
                {this.renderAmount.call(this)}
                <div className="order__item-cost">Бесплатно</div>
                <BtnIconClear />
            </div>
        )
    }

    renderSummary() {
        return (
            <div className="order__summary">
                <div className="order__summary-wrapper">

                </div>
            </div>
        )
    }

    renderOrder() {
        return [
            this.renderOrderItem(),
            this.renderPost(),
            this.renderSummary()
        ]
    }

    renderContainer() {
        return (
            <div className="page-main">
                <div className="order__title">Ваш заказ:</div>
                {this.renderOrder()}
                {this.renderExtraBlock.call(this)}
            </div>
        );
    }
}

export default Order;