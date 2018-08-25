import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { delItem } from "../redux/actions/Items";
import Btn from "../components/button/index.jsx";
import BtnIconClear from "../components/button/BtnIconClear.jsx";

class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1
        };
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
                    onClick={() => {
                        this.props.dispatch(delItem({
                        }))
                    }}
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