import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setCity,
         setPage,
         setItems,
         setOrder,
         setCategory } from "../redux/actions/Items";
import Card from "../container/Card.jsx";
import Base from "../container/Base.jsx";
import Select from "./select/index.jsx";
import Paginate from "./paginate/index.jsx";
import { order, location } from "../data/SortParams";
import { data } from "../data/Data";

class Content extends Base {

    componentDidMount() {
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
            <Paginate
                pageCount={this.props.totalPages}
                forcePage={this.props.currentPage}
                onChange={(value) => {
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
                        this.props.dispatch(setCity({city}))
                    }}
                    maxHeight={208}
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
    order: PropTypes.array,
    sortBy: PropTypes.number,
    dispatch: PropTypes.func,
    location: PropTypes.array,
    category: PropTypes.string,
    isLoadedData: PropTypes.bool,
    totalPages: PropTypes.number,
    pageItemsMap: PropTypes.object,
    selectedCity: PropTypes.number
};

export default withRouter(connect(state => {
    return {
        selectedCity: state.shop.selectedCity,
        isLoadedData: state.shop.isLoadedData,
        pageItemsMap: state.shop.pageItemsMap,
        currentPage: state.shop.currentPage,
        totalPages: state.shop.totalPages,
        location: state.shop.location,
        sortBy: state.shop.sortBy,
        order: state.shop.order
    }
})(Content));