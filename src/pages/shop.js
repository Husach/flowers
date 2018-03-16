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
      data
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getCity.call(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: this.getData(data, props.match.params.category)
    });
  }

  getData(d, category) {
    if (category) {
      return d.filter(item => item.category === category);
    }
    return d;
  }

  sorter(value) {
    this.setState({
      sortValue: value
    });
  }

  mysort(field) {
    let list = [...this.state.data];
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
      default : return this.state.data;
    }
  }

  getCity() {
    let {router: {route: {match: {params}}}} = this.context;
    let temp = data.filter(item => item.city === this.state.currentCity);
    temp = this.getData(temp, params.category);
    this.setState({
      data: temp
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
