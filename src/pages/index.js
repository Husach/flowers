import React, { Component } from 'react';
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';

class Home extends Component {

  render() {
    return (
      <div className="page">
        <Header />
        <div className="page-main">welcome</div>
        <Footer />
      </div>
    );
  }
}

export default Home;
