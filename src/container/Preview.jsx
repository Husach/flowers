import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BtnOrder from "../components/button/BtnOrder.jsx";

class Preview extends Component {
    renderInner() {
        return (
            <Link to={`/shop/details/${this.props.item.id}`} className="preview__inner">
                <img
                    className="preview__img"
                    src={this.props.item.src}
                    alt={this.props.item.name}
                />
                <div className="preview__name">{this.props.item.name}</div>
            </Link>
        )
    }

    renderFooter() {
        return (
            <div className="preview__footer">
                <div className="preview__price">{this.props.item.price} грн.</div>
                <BtnOrder
                    item={this.props.item}
                    style={{width: 120}}
                />
            </div>
        )
    }

    render() {
        return (
            <div className="preview__card">
                {this.renderInner()}
                {this.renderFooter()}
            </div>
        );
    }
}

Preview.propTypes = {
    item: PropTypes.object
};

export default Preview;