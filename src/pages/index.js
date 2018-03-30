import React, { Component } from 'react';
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';

import { data } from './../data/data';
import Preview from './../components/Preview';

const category = ['tulips', 'roses', 'bouquet'];

class Home extends Component {

  getTest(itemCategory) {
    let tmp = data.filter(item => item.category.some((itm) => itm === itemCategory));
    return tmp.map((item, index) =>
         <Preview item={item} key={index} />
    )
  }

  render() {
    return (
      <div className="page">
        <Header />
        <div className="page-main">
          {category.map((item, index) =>
            <div key={index} className="preview">
              {this.getTest.call(this, item)}
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
