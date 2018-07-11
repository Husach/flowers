import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ReactPaginate from "react-paginate";
import Select from "../components/Select.jsx";
import Card from "./Card.jsx";
import { sortCard } from "../redux/reducers/Shop";
//import {setSortItems} from "../redux/actions/Items";
//import Shop from "../pages/shop";

class Content extends Component {
    state = {
        currentPage: 1,
        limiter: 8,
        pages: 0
    }

    componentWillReceiveProps() {
      this.setState({currentPage: 1},
          () => this.getNumberPages.bind(this, this.props.items)
      )
    }

    /*sortChange(event, index, value) {
        this.props.sorter(value);
    }

    cityChange(event, index, value) {
        this.props.city(value);
    }
*/
    pageChange(data) {
        this.setState({
            currentPage: data.selected + 1
        });
    }

    getNumberPages(items) {
        let pages = Math.ceil(items.size / this.state.limiter);
        this.setState({pages});
    }

    newData() {
        //let items = this.props.items;

        /*let array = [];
        if(!this.props.data.length) return array;

        console.log("1 length:", this.props.data.length, "pages:", this.state.pages, "data:", this.props.data);
        for (let i = 0; i < this.state.limiter; i++) {
            if (this.state.currentPage === 1 && this.props.data[i] !== undefined) {
                array[i] = this.props.data[i];
            } else if (this.props.data[((this.state.currentPage - 1) * this.state.limiter) + i] !== undefined) {
                array[i] = this.props.data[((this.state.currentPage - 1) * this.state.limiter) + i];
            } else {
                i = this.state.limiter;
            }
        }

        console.log("2 new array:", array);
        return array;*/
        //return [];
    }

    renderContent() {
        return [
            <div className="content"
                 key="content-key-block"
            >
                {this.props.sortedItems.map((item, index) =>
                    <Card item={item} key={index} />
                )}
            </div>,
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                pageCount={this.state.pages}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                breakClassName={"break-me"}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                onPageChange={::this.pageChange}
                key="content-key-pagination"
            />
        ];
    }

    render() {
        debugger
        return (
            <div className="page-main">
                <div className="filter">
                    <Select
                        options={this.props.citys}
                        selected={this.props.selectedCity}
                        name="Город"
                        /*handleChange={::this.cityChange}*/
                    />
                    <Select
                        options={this.props.sortValue}
                        selected={this.props.sortBy}
                        name="Сортировка"
                        /*handleChange={::this.sortChange}*/
                    />
                </div>
                {this.renderContent.call(this)}
                </div>
        );
    }
}

Content.propTypes = {
    items: PropTypes.array,
    sortedItems: PropTypes.array,
    sortValue: PropTypes.array,
    citys: PropTypes.array,
    sortBy: PropTypes.number,
    selectedCity: PropTypes.number
};

export default connect(state => {
    return {
        sortedItems: state.shop.sortedItems,
        citys: state.shop.citys,
        selectedCity: state.shop.selectedCity,
        sortValue: state.shop.sortValue,
        sortBy: state.shop.sortBy
    }
})(Content);