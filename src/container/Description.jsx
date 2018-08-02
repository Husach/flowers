import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import BtnOrder from "../components/button/BtnOrder.jsx";
import {getDescription} from "./../redux/actions/Items";

class Description extends Component {
    componentDidMount() {
        let { id } = this.props.params;
        this.props.dispatch(getDescription(id))
    }


    renderNote(description) {
        if (description.note) return <div className="description__note">{description.note}</div>
    }

    render() {
        let {description} = this.props;
        return (
            <div className="description">
                <img className="description__img" src={description.src} alt={description.name} />
                <div className="description__info">
                    <div className="description__name">{description.name}</div>
                    <div className="description__price">{description.price} грн.</div>
                    <BtnOrder item={description} />
                    <div className="description__text">{description.description}</div>
                    <div className="description__text"><b>Состав:</b> {description.composition}</div>
                    {this.renderNote.call(this, description)}
                </div>
            </div>
        );
    }
}

Description.propTypes = {
    params: PropTypes.object,
    description: PropTypes.object,
    dispatch: PropTypes.func
};

export default connect((state) => {
    return {
        description: state.shop.description
    }
})(Description);
