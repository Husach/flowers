import React, { Component } from "react";
import Social from "./Social.jsx";
import Range from "../components/Range.jsx";
import Menu from "./Menu.jsx";

class Footer extends Component {
    renderPhones() {
        return (
            <div className="footer__phone">
                <span>+38 (050) 222-33-55</span>
                <span>+38 (067) 222-33-55</span>
            </div>
        )
    }

    render() {
        return (
            <div className="page-footer">
                <div className="footer__wrapper">
                    <div className="footer__item">
                        <Menu />
                    </div>
                    <div className="footer__item">
                        <Range />
                    </div>
                    <div className="footer__item">
                        {this.renderPhones.call(this)}
                        <div className="footer__social">
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
