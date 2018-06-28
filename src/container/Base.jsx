import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

class Base extends Component {

  render() {
    return (
      <div className="page">
        <Header />
        {this.renderContainer.call(this)}
        <Footer />
      </div>
    );
  }
}

export default Base;
