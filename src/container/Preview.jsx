import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Btn from "../components/button/Btn.jsx";

const btnStyle = {
  width: 150
}

class Preview extends Component {

  render() {
    return (
      <div className="preview__card">
          <img className="preview__img" src={this.props.item.src} alt={this.props.item.name} />
          <div className="preview__name">{this.props.item.name}</div>
          <div className="preview__price">{this.props.item.price} грн.</div>
          <div className="preview__btn">

            <Link to={`/order/${this.props.item.id}`}>
              <Btn
                className="btn__order"
                label="ДОБАВИТЬ"
                backgroundColor="#fff"
                labelColor="#d73925"
                style={btnStyle}
              />
            </Link>
          </div>
      </div>
    );
  }
}

Preview.propTypes = {
    item: PropTypes.object
};

export default Preview;
