import React, { Component } from 'react';
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';

class Contacts extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className="page-main">contacts</div>
        <Footer />
      </div>
    );
  }
}

export default Contacts;
