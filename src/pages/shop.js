import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './../components/layout/Header';
import Content from './../components/layout/Content';
import Footer from './../components/layout/Footer';

import { data } from './../data/data';

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      sortValue: ''
    };
  }

  getData() {
    let {router: {route: {match: {params}}}} = this.context;
    if (params.category) {
      return data.filter(itm => itm.category === params.category);
    }
    return data;
  }

  mysort(field, a, b) {
    if (a[field] > b[field]) return -1;
    if (a[field] < b[field]) return 1;
    return 0;
  }

  sorter(value) {

    switch (value) {
      case '1':
        data.sort(this.mysort.bind(this, "rating"));
        break;
      case '2':
        data.sort(this.mysort.bind(this, "latest"));
        break;
      case '3':
        data.sort(this.mysort.bind(this, "price")).reverse();
        break;
      case '4':
        data.sort(this.mysort.bind(this, "price"));
        break;
      default:
        break;
    }
    this.setState({
      data,
      sortValue: value
    });
    console.log(this.state.sortValue);
    
  }

  render() {
    return (
      <div className="page">
        <Header />
        <Content
            data={this.getData.call(this)}
            sorter={this.sorter.bind(this)}
            sortValue={this.state.sortValue}
        />
        <Footer />
      </div>
    );
  }
}

Shop.contextTypes = {
  router: PropTypes.object
};

export default Shop;
