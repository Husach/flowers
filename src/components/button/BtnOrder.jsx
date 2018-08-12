import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Btn from "./index.jsx"

class BtnOrder extends Component {
    render() {
        return (
            <Link to={`/order/${this.props.item.id}`}>
                <Btn
                    className="btn__order"
                    label="ЗАКАЗАТЬ"
                    labelColor="#fff"
                    bgColor="#7bb262"
                    style={this.props.style}
                />
            </Link>
        )
    }
}

BtnOrder.propTypes = {
    item: PropTypes.object,
    style: PropTypes.object
};

export default BtnOrder;
