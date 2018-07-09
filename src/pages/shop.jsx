import React from "react";
import PropTypes from "prop-types";
import Base from "../container/Base.jsx";
import Content from "../container/Content.jsx";
import { data } from "../data/data";

import { connect } from "react-redux";

class Shop extends Base {
  constructor(props) {
    super(props);
    this.state = {
      sortValue: "1",
      currentCity: 11,
      datacity: [],
      items: []
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getCity.call(this);
  }

  componentWillReceiveProps(props) {
    debugger
    this.setState({
      items: this.getData(this.state.datacity, props.match.params.category)
    });
  }

  getData(d, category) {    
    if (category) {
      return d.filter(item => item.category.some((itm) => itm === category));
    }
    return d;
  }

  sorter(value) {
    this.setState({
      sortValue: value
    });
  }

  mySort(field) {
    let list = [...this.state.items];
    list.sort((a, b) => {
      if (a[field] > b[field]) return -1;
      if (a[field] < b[field]) return 1;
      return 0;
    });
    return list;
  }

  getOptions() {
    switch (this.state.sortValue) {
      case "1": return this.mySort.call(this, "rating");
      case "2": return this.mySort.call(this, "price");
      case "3": return this.mySort.call(this, "price").reverse();
      case "4": return this.mySort.call(this, "latest");
      default : return this.state.items;
    }
  }

  getCity() {
    let {router: {route: {match: {params}}}} = this.context;
    let datacity = [];
    this.props.items.forEach(item => {
      if(item.city === this.state.currentCity) {
          datacity.push(item);
      }
    });
    debugger
    let items = this.getData(datacity, params.category);
    debugger
    this.setState({
      datacity,
      items
    });
  }

  city(value) {
    this.setState({
      currentCity: value
    }, () => {
      this.getCity.call(this);
    });
  }

  renderContainer() {
    debugger
    return (
      <Content items={this.getOptions.call(this)}
               city={::this.city}
               sorter={::this.sorter}
               sortValue={this.state.sortValue}
               currentCity={this.state.currentCity}
      />
    );
  }
}

Shop.contextTypes = {
  router: PropTypes.object
};

export default connect(({ items }) => ({
        items
    })
)(Shop);
