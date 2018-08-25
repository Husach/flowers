import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Social from "./Social.jsx";
import Range from "../components/Range.jsx";
import Menu from "./Menu.jsx";

class Header extends Component {
    renderLogo() {
        return (
            <Link to="/">
                <img
                    src="img/logo.png"
                    alt="logo"
                    className="header__logo"
                />
            </Link>
        )
    }

    renderBasket() {
        if(this.props.amount > 0) {
            return (
                <div className="header__basket header__basket--data">
                    <div className="header__basket-value">Кол-во {this.props.total}</div>
                    <div className="header__basket-value">Итого: {this.props.amount} грн.</div>
                </div>
            )
        }

        return (
            <div className="header__basket">
                <svg viewBox="0 0 24 24" className="header__basket-svg">
                    <path d="M5.5,21C4.72,21 4.04,20.55 3.71,19.9V19.9L1.1,10.44L1,10A1,1 0 0,1 2,9H6.58L11.18,2.43C11.36,2.17 11.66,2 12,2C12.34,2 12.65,2.17 12.83,2.44L17.42,9H22A1,1 0 0,1 23,10L22.96,10.29L20.29,19.9C19.96,20.55 19.28,21 18.5,21H5.5M12,4.74L9,9H15L12,4.74M12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13Z" />
                </svg>
                <div className="header__basket-value">Корзина пуста</div>
            </div>
        )
    }

    renderContent() {
        return (
            <div className="header__content">
                <Menu />
                <div className="header__contacts">
                    <span className="header__phone">+38 (050) 222-33-55</span>
                    <span className="header__phone">+38 (067) 222-33-55</span>
                    <img
                        className="header__viber"
                        src="img/social/viber.png"
                        alt="viber"
                    />
                    {this.renderBasket()}
                </div>
            </div>
        )
    }

    renderHeader() {
        return (
            <div className="header">
                {this.renderLogo()}
                {this.renderContent()}
            </div>
        )
    }

    render() {
        return (
            <div className="page-header">
                {this.renderHeader()}
                <Range />
                <Social />
            </div>
        );
    }
}

Header.propTypes = {
    amount: PropTypes.number,
    total: PropTypes.number
}

export default connect(state => {
    return {
        amount: state.basket.amount,
        total: state.basket.total
    }
})(Header);
