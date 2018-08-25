import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Base from "./Base.jsx";
import Preview from "./Preview.jsx";
import { data } from "../data/Data";
import BtnIconClear from "../components/button/BtnIconClear";
import OrderItem from "./OrderItem.jsx";

class Order extends Base {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            dataTmp: {}
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

    renderPost() {
        return (
            <div className="order__item order__item--post-card">
                <img
                    className="order__item-img"
                    src="img/post-card.jpg"
                    alt="bonus_card"
                />
                <div className="order__item-name">Поздравительнная открытка</div>
                <div className="order__item-cost">Бесплатно</div>
                <BtnIconClear />
            </div>
        )
    }

    renderSummary() {
        return (
            <div className="order__summary">
                <div className="order__summary-wrapper">
                    <div className="">Кол-во {this.props.number}</div>
                    <div className="">Итого: {this.props.amount} грн.</div>
                </div>
            </div>
        )
    }

    renderOrder() {
        debugger
        return [
            this.props.inOrder.map((item, index) =>
                <OrderItem item={item} key={index} />
            ),
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

Order.propTypes = {
    inOrder: PropTypes.array,
    amount: PropTypes.number,
    number: PropTypes.number
};

export default connect(state => {
    return {
        inOrder: state.basket.inOrder,
        amount: state.basket.amount,
        number: state.basket.number
    }
})(Order);