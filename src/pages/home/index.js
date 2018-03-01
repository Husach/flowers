import React, { Component } from 'react';
import Filter from './../../components/Filter';
import Header from './../../components/layout/Header';
import Content from './../../components/layout/Content';

import { bouquet } from './../../data/bouquet';

class Home extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className="main">
          <Filter />
          <Content bouquet={bouquet}/>
        </div>
      </div>
    )
  }
}

export default Home;
