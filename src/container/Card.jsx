import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BtnOrder from "../components/button/BtnOrder.jsx";

class Card extends Component {

    render() {
        return (
            <div className="card">
                <div className="card__wrapper">
                    <Link className="card__info" to={`details/${this.props.item.id}`} >
                        <img className="card__img" src={this.props.item.src} alt={this.props.item.name} />
                        <div className="card__name">{this.props.item.name}</div>
                        <div className="card__price">{this.props.item.price} грн.</div>
                    </Link>
                    <div className="card__btn">
                        <BtnOrder item={this.props.item} />
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    item: PropTypes.array
};

export default Card;
