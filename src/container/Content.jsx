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
    page: 1
  }

  sortChange(event, index, value) {
    this.props.sorter(value);
  }

  cityChange(event, index, value) {
    this.props.city(value);
  }

  pageChange(data) {
    //debugger
    this.setState({
      page: data.selected + 1
    }, () => this.newData.call(this)
      /*console.log("page data selected", data.selected, "new page", this.state.page)*/
    );
  }

  newData() {
    let limiter = 8;
    let length = this.props.data.length;
    console.log("length:", {length});

    let page = Math.ceil(length / limiter);
    console.log("page:", {page});

    let array = [];

    console.log(this.props.data);

    //debugger

    for (let i = 0; i < limiter; i++) {
      if (this.state.page === 1) {
        array[i] = this.props.data[i];
      } else {
        array[i] = this.props.data[((this.state.page - 1) * limiter) + i];
      }
    }

    console.log(array);
  }

  renderContent() {
    return [
      <div className="content">
        {/*{array.map((item, index) =>
          <Card item={item} key={index} />
        )}*/}

        {this.props.data.map((item, index) =>
          <Card item={item} key={index} />
        )}
      </div>,
      <ReactPaginate previousLabel={"previous"}
                     nextLabel={"next"}
                     pageCount={page}
                     pageRangeDisplayed={2}
                     marginPagesDisplayed={1}
                     breakClassName={"break-me"}
                     containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={"active"}
                     onPageChange={::this.pageChange}
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
