import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { delItem } from "../redux/actions/Items";
import Btn from "../components/button/index.jsx";
import BtnIconClear from "../components/button/BtnIconClear.jsx";
import { setQuantity } from "../redux/actions/Items";

class OrderItem extends Component {
    prepareSign(value) {
        let id = this.props.item.id;
        this.props.dispatch(setQuantity({
            value,
            id
        }))
    }

    renderAmount() {
        return (
            <div className="calc">
                <Btn
                    className="calc__btn"
                    label={"-"}
                    onClick={this.prepareSign.bind(this, "MINUS")}
                />
                <div className="calc__value">{this.props.item.quantity}</div>
                <Btn
                    className="calc__btn"
                    label={"+"}
                    onClick={this.prepareSign.bind(this, "PLUS")}
                />
            </div>
        );
    }

    deleteItem() {
        let id = this.props.item.id;
        this.props.dispatch(delItem({
            id
        }))
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
                <div className="order__item-cost">{this.props.item.price} грн.</div>
                <BtnIconClear
                    onClick={this.deleteItem.bind(this)}
                />
            </div>
        )
    }
}

OrderItem.propTypes = {
    dispatch: PropTypes.func,
    item: PropTypes.object
}

export default connect()(OrderItem);