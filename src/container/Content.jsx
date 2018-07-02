import React, { Component } from "react";
import ReactPaginate from 'react-paginate';
import Select from "../components/Select.jsx";
import Card from "./Card.jsx";

const sort = [
  {
    value: "1",
    primaryText: "по рейтингу"
  },
  {
    value: "2",
    primaryText: "цена: по убыванию"
  },
  {
    value: "3",
    primaryText: "цена: по возрастанию"
  },
  {
    value: "4",
    primaryText: "новинки"
  }
];

const citys = [
  {
    value: 11,
    primaryText: "Кременчуг"
  },
  {
    value: 12,
    primaryText: "Киев"
  },
  {
    value: 13,
    primaryText: "Харьков"
  }
];

class Content extends Component {
  state = {
    currentPage: 1,
    limiter: 8,
    pages: 0
  }

  componentDidMount() {
    this.getNumberPages.call(this);
  }

  sortChange(event, index, value) {
    this.props.sorter(value);
  }
  cityChange(event, index, value) {
    this.props.city(value);
  }

  pageChange(data) {
    this.setState({
      currentPage: data.selected + 1
    }, () => this.newData.call(this));
  }

  getNumberPages() {
    let pages = Math.ceil(this.props.data.length / this.state.limiter);

    if (pages !== this.state.pages) {
      this.setState({pages});
    }
  }

  newData() {
    let array = [];
    if(!this.props.data.length) return array;

    console.log("length:", this.props.data.length, "pages:", this.state.pages, "data:", this.props.data);
    for (let i = 0; i < this.state.limiter; i++) {
      if (this.state.currentPage === 1) {
        array[i] = this.props.data[i];
      } else {
        array[i] = this.props.data[((this.state.currentPage - 1) * this.state.limiter) + i];
      }
    }

    console.log("new array:", array);
    return array;
  }

  renderContent() {
    let array = this.newData.call(this);
    return [
      <div className="content"
            key="content-key-block">
        {array.map((item, index) =>
          <Card item={item} key={index} />
        )}

        {/*{this.props.data.map((item, index) =>
          <Card item={item} key={index} />
        )}*/}
      </div>,
      <ReactPaginate previousLabel={"previous"}
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
    return (
      <div className="page-main">
        <div className="filter">
          <Select options={citys}
                  selected={this.props.currentCity}
                  name="Город"
                  handleChange={::this.cityChange}
          />
          <Select options={sort}
                  selected={this.props.sortValue}
                  name="Сортировка"
                  handleChange={::this.sortChange}
          />
        </div>
        {this.renderContent.call(this)}
      </div>
    );
  }
}

export default Content;
