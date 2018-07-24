import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactPaginate from "react-paginate";
import {setPage} from "../../redux/actions/Items";
import PropTypes from "prop-types";

class Paginate extends Component {
    render() {
        return (
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
        )
    }
}

Paginate.propTypes = {
    dispatch: PropTypes.func,
    handleChange: PropTypes.func,
    currentPage: PropTypes.number,
    totalPages: PropTypes.number
};

export default withRouter(connect(state => {
    return {
        currentPage: state.shop.currentPage,
        totalPages: state.shop.totalPages,
    }
})(Paginate));