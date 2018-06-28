import React, { Component } from 'react';
import Header from '../components/layout/Header';
import Content from '../components/layout/Content';

import { data } from '../data/data';

class Piece extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <Content data={data}/>
      </div>
    );
  }
}

export default Piece;
