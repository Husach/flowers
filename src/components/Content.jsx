import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { withRouter } from "react-router";
import ReactPaginate from "react-paginate";
import { setCity,
         setOrder,
         changePage,
         setCategory } from "../redux/actions/Items";
import Select from "./select/index.jsx";
import Card from "../container/Card.jsx";
import Base from "../container/Base.jsx";

class Content extends Base {

    componentDidMount() {
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

    renderContent() {
        return [
            <div className="content" key="content-key-block" >
                {this.props.pageItems.map((item, index) =>
                    <Card item={item} key={index} />
                )}
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
                onPageChange={(value) => {
                    debugger
                    this.props.dispatch(changePage((
                        value
                    )))
                }}
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
    sortedItems: PropTypes.array,
    isLoadedData: PropTypes.bool,
    handleChange: PropTypes.func,
    selectedCity: PropTypes.number,
    totalPages: PropTypes.number
};

export default withRouter(connect(state => {
    return {
        isLoadedData: state.shop.isLoadedData,
        selectedCity: state.shop.selectedCity,
        sortedItems: state.shop.sortedItems,
        pageItems: state.shop.pageItems,
        currentPage: state.shop.currentPage,
        location: state.shop.location,
        sortBy: state.shop.sortBy,
        totalPages: state.shop.totalPages,
        order: state.shop.order
    }
})(Content));