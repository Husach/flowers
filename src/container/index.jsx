import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setHomeItems } from "../redux/actions/Items";
import Preview from "./Preview.jsx";
import Base from "./Base.jsx";
import axios from "axios";

class Home extends Base {

    componentDidMount() {
        axios.post("https://node-az.herokuapp.com/api/get-flowers").then(({data}) => {
            this.props.dispatch(setHomeItems({
                items: data
            }))
        })
    }

    renderPreview() {
        let arr = [];
        this.props.homeItemsMap.forEach((item) => arr.push(<Preview item={item} key={`preview1-${item.id}`} />));
        return arr;
    }

    renderContainer() {
        return (
            <div className="page-main">
                <div className="preview">
                    {this.renderPreview()}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    dispatch: PropTypes.func
};

export default withRouter(connect(state => {
    return {homeItemsMap: state.shop.homeItemsMap}
})(Home));
