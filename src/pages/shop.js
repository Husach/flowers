import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './../components/layout/Header';
import Content from './../components/layout/Content';
import Footer from './../components/layout/Footer';

import { data } from './../data/data';

class Shop extends Component {

  getData() {
    let {router: {route: {match: {params}}}} = this.context;
    if(params.category) {
      return data.filter(itm => itm.category === params.category);
    }
    return data;
  }

  render() {
    return (
      <div className="page">
        <Header />
        <Content data={this.getData.call(this)}/>
        <Footer />
      </div>
    );
  }
}

Shop.contextTypes = {
  router: PropTypes.object
};

export default Shop;
