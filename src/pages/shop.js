import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { data } from './../data/data';
import Header from './../components/layout/Header';
import Content from './../components/layout/Content';
import Footer from './../components/layout/Footer';

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      sortValue: '1',
      currentCity: 11,
      datacity: [],
      data1: []
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getCity.call(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      data1: this.getData(this.state.datacity, props.match.params.category)
    });
  }

  getData(d, category) {    
    if (category) {
      return d.filter(item => item.category.some((itm) => itm === category));  //return d.filter(item => item.category === category);
    }
    return d;
  }

  sorter(value) {
    this.setState({
      sortValue: value
    });
  }

  mysort(field) {
    let list = [...this.state.data1];
    list.sort((a, b) => {
      if (a[field] > b[field]) return -1;
      if (a[field] < b[field]) return 1;
      return 0;
    });
    return list;
  }

  getOptions() {
    switch (this.state.sortValue) {
      case '1': return this.mysort.call(this, "rating");
      case '2': return this.mysort.call(this, "price");
      case '3': return this.mysort.call(this, "price").reverse();
      case '4': return this.mysort.call(this, "latest");
      default : return this.state.data1;
    }
  }

  getCity() {
    let {router: {route: {match: {params}}}} = this.context;
    let datacity = data.filter(item => item.city === this.state.currentCity);
    let data1 = this.getData(datacity, params.category);
    this.setState({
      datacity,
      data1
    });
  }

  city(value) {
    this.setState({
      currentCity: value
    }, () => {
      this.getCity.call(this);
    });
  }

  render() {
    return (
      <div className="page">
        <Header />
        <Content data={this.getOptions.call(this)}
                 city={this.city.bind(this)}
                 sorter={this.sorter.bind(this)}
                 sortValue={this.state.sortValue}
                 currentCity={this.state.currentCity} />
        <Footer />
      </div>
    );
  }
}

Shop.contextTypes = {
  router: PropTypes.object
};

export default Shop;
