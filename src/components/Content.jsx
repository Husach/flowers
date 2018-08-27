import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Card from "../container/Card.jsx";
import Base from "../container/Base.jsx";
import Select from "./select/index.jsx";
import Paginate from "./paginate/index.jsx";
import { order, location } from "../data/SortParams";
import { data } from "../data/Data";
import { setCity,
         setPage,
         setItems,
         setOrder,
         setCategory } from "../redux/actions/Items";

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
        let city = +this.props.history.location.search.substr(6, 2);
        let sort = +this.props.history.location.search.substr(16, 1);
        let page = +this.props.history.location.search.substr(-1);

        if (!this.props.isLoadedData && props.isLoadedData ||
            category !== oldCategory || start) {
            debugger
            this.props.dispatch(setCategory({
                category,
                city,
                sort,
                page
            }))
        }
    }

    addParamsToUrl(city, sortBy, page) {
        this.props.history.push(`?city=${city}&sortBy=${sortBy}&page=${page}`);
    }

    renderCard() {
        let arr = [];
        this.props.pageItemsMap.forEach((item) => arr.push(<Card item={item} key={item.id}/>));
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
                    this.addParamsToUrl(this.props.selectedCity, this.props.sortBy, value.selected);
                }}
                key="content-paginate-key"
            />
        ];
    }

    renderSelectCity() {
        return (
            <Select
                name="Город"
                options={this.props.location}
                selected={this.props.selectedCity}
                handleChange={(city) => {
                    this.props.dispatch(setCity({
                        city
                    }));
                    this.addParamsToUrl(city, this.props.sortBy, this.props.currentPage);
                }}
                maxHeight={208}
            />
        )
    }

    renderSelectSort() {
        return (
            <Select
                name="Сортировка"
                options={this.props.order}
                selected={this.props.sortBy}
                handleChange={(sortBy) => {
                    this.props.dispatch(setOrder({
                        sortBy
                    }));
                    this.addParamsToUrl(this.props.selectedCity, sortBy, this.props.currentPage);
                }}
            />
        )
    }

    renderFilters() {
        return (
            <div className="filter">
                {this.renderSelectCity()}
                {this.renderSelectSort()}
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
    pageItemsMap: PropTypes.object,
    selectedCity: PropTypes.number,
    isLoadedData: PropTypes.bool,
    totalPages: PropTypes.number,
    category: PropTypes.string,
    location: PropTypes.array,
    dispatch: PropTypes.func,
    sortBy: PropTypes.number,
    order: PropTypes.array
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