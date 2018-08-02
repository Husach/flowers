import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

const Paginate = ({pageCount, forcePage, onChange}) => (
    <ReactPaginate
        pageCount={pageCount}
        forcePage={forcePage}
        onPageChange={onChange}
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
);

Paginate.propTypes = {
    forcePage: PropTypes.number,
    pageCount: PropTypes.number,
    onChange: PropTypes.func
};

export default Paginate;