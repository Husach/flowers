import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
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
import { order, location } from "../data/SortParams";
import { data } from "../data/Data";

class Content extends Base {

    componentDidMount() {
        this.props.dispatch(setItems({
            location: location,
            order: order,
            items: data
        }));

        let start = true;
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
            this.props.dispatch(setCategory({
                category
            }))
        }
    }

/*<div className="content" key="content-key-block" >
{this.props.pageItemsMap.map((item, index) =>
    <Card item={item} key={index} />
)}</div>,*/

    renderCard() {
        debugger
        let arr = [];
        if (this.props.sortedItems !== undefined) {
            this.props.sortedItems.forEach((item) => arr.push(<Card item={item} key={item.index}/>))
        }

        return arr;
    }

    renderContent() {
        return [
            <div className="content" key="content-key-block" >
                {this.renderCard()}
            </div>,
            <ReactPaginate
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                previousLabel={"previous"}
                nextLabel={"next"}
                pageCount={this.props.totalPages}
                forcePage={this.props.currentPage}
                activeClassName={"active"}
                breakClassName={"break-me"}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                key="content-key-pagination"
                onPageChange={(value) => {
                    this.props.dispatch(setPage((
                        value
                    )))
                }}
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
                        this.props.dispatch(setCity({
                            city
                        }))
                    }}
                />
                <Select
                    name="Сортировка"
                    options={this.props.order}
                    selected={this.props.sortBy}
                    handleChange={(sortBy) => {
                        this.props.dispatch(setOrder({
                            sortBy
                        }))
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
    order: PropTypes.array,
    items: PropTypes.array,
    sortBy: PropTypes.number,
    dispatch: PropTypes.func,
    location: PropTypes.array,
    category: PropTypes.string,
    pageItems: PropTypes.array,
    totalPages: PropTypes.number,
    isLoadedData: PropTypes.bool,
    handleChange: PropTypes.func,
    selectedCity: PropTypes.number,
    pageItemsMap: PropTypes.func,
    sortedItemsMap: PropTypes.object,
    sortedItems: PropTypes.object
};

export default withRouter(connect(state => {
    return {
        sortedItems: state.shop.sortedItems,
        pageItemsMap: state.shop.pageItemsMap,
        isLoadedData: state.shop.isLoadedData,
        selectedCity: state.shop.selectedCity,
        currentPage: state.shop.currentPage,
        totalPages: state.shop.totalPages,
        pageItems: state.shop.pageItems,
        location: state.shop.location,
        sortBy: state.shop.number,
        order: state.shop.order
    }
})(Content));