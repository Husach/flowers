import React, { Component } from 'react';
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';

class About extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className="page-main">about</div>
        <Footer />
      </div>
    );
  }
}

export default About;
