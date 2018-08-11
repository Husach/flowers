import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Index from "../components/button/index.jsx";

const btnStyle = {width: 230};

class Preview extends Component {
    renderBtnOrder() {
        return (
            <div className="preview__btn">
                <Link to={`/order/${this.props.item.id}`}>
                    <Index
                        className="btn__order"
                        label="ДОБАВИТЬ"
                        backgroundColor="#fff"
                        labelColor="#d73925"
                        style={btnStyle}
                    />
                </Link>
            </div>
        )
    }

    render() {
        //debugger
        return (
            <div className="preview__card" key={this.props.item.id + this.props.item.id}>
                <img className="preview__img" src={this.props.item.src} alt={this.props.item.name} />
                <div className="preview__name">{this.props.item.name}</div>
                <div className="preview__price">{this.props.item.price} грн.</div>
                {this.renderBtnOrder()}
            </div>
        );
    }
}

Preview.propTypes = {
    item: PropTypes.object
};

export default Preview;