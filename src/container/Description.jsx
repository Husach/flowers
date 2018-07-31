import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import BtnOrder from "../components/button/BtnOrder.jsx";

class Description extends Component {
    getItem() {
        let { id } = this.props.params;
        let item = this.props.itemsMap.get(id);
        if(!item) {
            return {};
        }
        return item;
    }

    renderNote(item) {
        if (item.note) return <div className="description__note">{item.note}</div>
    }

    render() {
        let item = this.getItem.call(this);

        return (
            <div className="description">
                <img className="description__img" src={item.src} alt={item.name} />
                <div className="description__info">
                    <div className="description__name">{item.name}</div>
                    <div className="description__price">{item.price} грн.</div>
                    <BtnOrder item={item} />
                    <div className="description__text">{item.description}</div>
                    <div className="description__text"><b>Состав:</b> {item.composition}</div>
                    {this.renderNote.call(this, item)}
                </div>
            </div>
        );
    }
}

Description.propTypes = {
    params: PropTypes.object,
    itemsMap: PropTypes.object
};

export default connect((state) => {
    return {
        itemsMap: state.shop.itemsMap
    }
})(Description);
