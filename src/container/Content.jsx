import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { withRouter } from "react-router";
import ReactPaginate from "react-paginate";
import { sortCity, sortOrder, sortCategory } from "../redux/actions/Items";
import Select from "../components/Select.jsx";
import Card from "./Card.jsx";
import Base from "./Base.jsx";

class Content extends Base {
/*    state = {        currentPage: 1,        limiter: 8,        pages: 0    };*/
    componentDidMount() {
        this.setCategory.call(this, this.props);
    }

    componentWillReceiveProps(props) {
        this.setCategory.call(this, props);
    }

    setCategory(props) {
        if(!props.isLoadedData) return null;
        let {match: {params: {category}}} = props;
        let {match: {params: {category: oldCategory}}} = this.props;
        if (!this.props.isLoadedData && props.isLoadedData ||
            category !== oldCategory) {
            this.props.dispatch(sortCategory({
                category
            }))
        }
    }
    /*componentWillReceiveProps() {
      this.setState({currentPage: 1},
          () => this.getNumberPages.bind(this, this.props.items)
      )
    }

    sortChange(event, index, value) {
        this.props.sorter(value);    }

    cityChange(event, index, value) {
        this.props.city(value);    }

    pageChange(data) {
        this.setState({
            currentPage: data.selected + 1        });    }

    getNumberPages(items) {
        let pages = Math.ceil(items.size / this.state.limiter);
        this.setState({pages});
    }

    newData() {
        let items = this.props.items;
        let array = [];
        if(!this.props.data.length) return array;
        console.log("1 length:", this.props.data.length, "pages:", this.state.pages, "data:", this.props.data);
        for (let i = 0; i < this.state.limiter; i++) {
            if (this.state.currentPage === 1 && this.props.data[i] !== undefined) {
                array[i] = this.props.data[i];
            } else if (this.props.data[((this.state.currentPage - 1) * this.state.limiter) + i] !== undefined) {
                array[i] = this.props.data[((this.state.currentPage - 1) * this.state.limiter) + i];
            } else {
                i = this.state.limiter;
            }        }
        console.log("2 new array:", array);
        return array;
        return [];    }*/

    renderContent() {
        return [
            <div className="content" key="content-key-block" >
                {this.props.sortedItems.map((item, index) =>
                    <Card item={item} key={index} />
                )}
            </div>,
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                /*pageCount={this.state.pages}*/
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                breakClassName={"break-me"}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                /*onPageChange={::this.pageChange}*/
                key="content-key-pagination"
            />
        ];
    }

    renderContainer() {
        debugger

        return (
            <div className="page-main">
                <div className="filter">
                    <Select
                        options={this.props.locations}
                        selected={this.props.selectedCity}
                        name="Город"
                        handleChange={
                            this.props.dispatch(sortCity({
                                selectedCity: this.selectedCity
                            }))
                        }
                    />
                    <Select
                        options={this.props.sortValue}
                        selected={this.props.sortBy}
                        name="Сортировка"
                        handleChange={
                           this.props.dispatch(sortOrder({
                               sortBy: this.sortBy
                           }))
                       }
                    />
                </div>
                {this.renderContent.call(this)}
                </div>
        );
    }
}

Content.propTypes = {
    items: PropTypes.array,
    sortBy: PropTypes.number,
    dispatch: PropTypes.func,
    category: PropTypes.string,
    sortValue: PropTypes.array,
    locations: PropTypes.array,
    sortedItems: PropTypes.array,
    isLoadedData: PropTypes.bool,
    selectedCity: PropTypes.number,
    handleChange: PropTypes.func
};

export default withRouter(connect(state => {
    return {
        isLoadedData: state.shop.isLoadedData,
        selectedCity: state.shop.selectedCity,
        sortedItems: state.shop.sortedItems,
        locations: state.shop.locations,
        sortValue: state.shop.sortValue,
        sortBy: state.shop.sortBy
    }
})(Content));