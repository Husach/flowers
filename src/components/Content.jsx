import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactPaginate from "react-paginate";
import { setCity,
         setPage,
         setOrder,
         setCategory } from "../redux/actions/Items";
import Select from "./select/index.jsx";
import Card from "../container/Card.jsx";
import Base from "../container/Base.jsx";

import { setItems } from "../redux/actions/Items";
//import { setItems } from "../API/index.js";

import { order, location } from "../data/SortParams";
import { data } from "../data/Data";
//import Paginate from "paginate/index.jsx";

class Content extends Base {

    componentDidMount() {
        debugger
        let start = true;
        this.props.dispatch(setItems({
            location: location,
            order: order,
            items: data
        }));
        this.setCategory.call(this, this.props, start);
    }

    componentWillReceiveProps(props) {
        this.setCategory.call(this, props);
    }

    setCategory(props, start) {
        if(!props.isLoadedData) return null;
        let {match: {params: {category}}} = props;
        let {match: {params: {category: oldCategory}}} = this.props;
        if (!this.props.isLoadedData && props.isLoadedData ||
            category !== oldCategory || start) {
            this.props.dispatch(setCategory({category}))
        }
    }

    renderCard() {
        let arr = [];
        this.props.pageItemsMap.forEach((item) => arr.push(<Card item={item} key={item.index}/>));
        return arr;
    }

    renderContent() {
        return [
            <div className="content" key="content-key-block" >
                {this.renderCard()}
            </div>,
            <ReactPaginate
                pageCount={this.props.totalPages}
                forcePage={this.props.currentPage}
                onPageChange={(value) => {
                    this.props.dispatch(setPage((
                        value
                    )))
                }}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                previousLabel={"previous"}
                nextLabel={"next"}
                activeClassName={"active"}
                breakClassName={"break-me"}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                key="content-key-pagination"
            />
        ];
    }

    renderFilters() {
        return (
            <div className="filter">
                <Select
                    name="Город"
                    options={this.props.location}
                    selected={this.props.selectedCity}
                    handleChange={(city) => {
                        this.props.dispatch(setCity({city}))
                    }}
                    maxHeight={200}
                />
                <Select
                    name="Сортировка"
                    options={this.props.order}
                    selected={this.props.sortBy}
                    handleChange={(sortBy) => {
                        this.props.dispatch(setOrder({sortBy}))
                    }}
                />
            </div>
        )
    }

    renderContainer() {
        return (
            <div className="page-main">
                {this.renderFilters.call(this)}
                {this.renderContent.call(this)}
            </div>
        );
    }
}

Content.propTypes = {
    dispatch: PropTypes.func,
    handleChange: PropTypes.func,
    sortBy: PropTypes.number,
    selectedCity: PropTypes.number,
    category: PropTypes.string,
    isLoadedData: PropTypes.bool,
    totalPages: PropTypes.number,
    order: PropTypes.array,
    location: PropTypes.array,
    pageItemsMap: PropTypes.object,
};

export default withRouter(connect(state => {
    return {
        sortBy: state.shop.sortBy,
        selectedCity: state.shop.selectedCity,
        isLoadedData: state.shop.isLoadedData,
        currentPage: state.shop.currentPage,
        totalPages: state.shop.totalPages,
        order: state.shop.order,
        location: state.shop.location,
        pageItemsMap: state.shop.pageItemsMap
    }
})(Content));