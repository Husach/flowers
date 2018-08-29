import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { delItem } from "../redux/actions/Items";
import { setCount } from "../redux/actions/Items";
import Btn from "../components/button/index.jsx";
import BtnIconClear from "../components/button/BtnIconClear.jsx";

class OrderItem extends Component {
    updateCount(value) {
        this.props.dispatch(setCount({
            id: this.props.item.id,
            value
        }))
    }

    renderAmount() {
        return (
            <div className="calc">
                <Btn
                    className="calc__btn"
                    label={"-"}
                    onClick={this.updateCount.bind(this, "MINUS")}
                />
                <div className="calc__value">{this.props.count}</div>
                <Btn
                    className="calc__btn"
                    label={"+"}
                    onClick={this.updateCount.bind(this, "PLUS")}
                />
            </div>
        );
    }

    render() {
        return (
            <div className="order__item">
                <img
                    className="order__item-img"
                    src={this.props.item.src}
                    alt={this.props.item.name}
                />
                <div className="order__item-name">{this.props.item.name}</div>
                {this.renderAmount.call(this)}
                <div className="order__item-cost">{this.props.price} грн.</div>
                <BtnIconClear
                    onClick={
                        this.props.dispatch(delItem({
                            id: this.props.item.id
                        }))
                    }
                />
            </div>
        )
    }
}

OrderItem.propTypes = {
    dispatch: PropTypes.func,
    price: PropTypes.string,
    count: PropTypes.number,
    item: PropTypes.object
};

export default connect()(OrderItem);