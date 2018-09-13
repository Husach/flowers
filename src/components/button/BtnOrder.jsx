import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Btn from "./index.jsx"
import { isModal, addItem } from "../../redux/actions/Items";

class BtnOrder extends Component {
    checkDifCity() {
        let item = this.props.item;
        let newCity = item.city;
        let oldMap = this.props.inOrderMap.first();

        if(oldMap) {
            let oldCity = oldMap.get("item").city;
            if(newCity !== oldCity) {
                this.props.dispatch(isModal({
                    isModalFlag: true
                }));
            } else {
                this.addItem();
            }
        } else {
            this.addItem();
        }
    }

    addItem() {
        this.props.dispatch(addItem({
            item: this.props.item
        }));
    }

    render() {
        return (
            <Link to={`/order/${this.props.item.id}`}>
                <Btn
                    className="btn__order"
                    label="ЗАКАЗАТЬ"
                    labelColor="#fff"
                    bgColor="#7bb262"
                    style={this.props.style}
                    onClick={() => this.checkDifCity()}
                />
            </Link>
        )
    }
}

BtnOrder.propTypes = {
    inOrderMap: PropTypes.object,
    dispatch: PropTypes.func,
    onClick: PropTypes.func,
    style: PropTypes.object,
    item: PropTypes.object,
    first: PropTypes.func
};

export default connect(state => {
    return {
        inOrderMap: state.basket.inOrderMap
    }
})(BtnOrder);
