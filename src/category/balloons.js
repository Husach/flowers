import React, { Component } from "react";
import Header from "../components/layout/Header.jsx";
import Content from "../components/layout/Content.jsx";

import { data } from "../data/data";

class Balloons extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <Content data={data}/>
      </div>
    );
  }
}

export default Balloons;
