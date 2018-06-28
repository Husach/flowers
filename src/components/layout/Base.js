import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Base extends Component {

  render() {
    return (
      <div className="page">
        <Header />
        <div className="page-main">
          {this.renderContainer.call(this)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Base;
