import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Btn from "./index.jsx"
import { addItem } from "../../redux/actions/Items";

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
                    onClick={() => {
                        //debugger;
                        console.log(this.props.item);
                        this.props.dispatch(addItem({
                            item: this.props.item
                        }));
                    }}
                />
            </Link>
        )
    }
}

BtnOrder.propTypes = {
    dispatch: PropTypes.func,
    onClick: PropTypes.func,
    style: PropTypes.object,
    item: PropTypes.object
};

export default BtnOrder;
