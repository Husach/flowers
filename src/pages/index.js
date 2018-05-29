import React, { Component } from 'react';
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

import { data } from './../data/data';
import Preview from './../components/Preview';

const category = ['tulips', 'roses', 'bouquet'];

const { red400, red600, blue400, blue600, green400, green600 } = require('material-ui/styles/colors');

class Home extends Component {

  getTest(itemCategory) {
    let tmp = data.filter(item => item.category.some((itm) => itm === itemCategory));
    return tmp.map((item, index) =>
         <Preview item={item} key={index} />
    );
  }

  render() {
    return (
      <div className="page">
        <Header />
        <div className="page-main">

          <AutoRotatingCarousel
              label='Get started'
              open={true}
              style={{ position: 'absolute' }}
          >
              <Slide
                  media={<img src='./img/roses/03-0001.jpg' />}
                  mediaBackgroundStyle={{backgroundColor: red400}}
                  contentStyle={{backgroundColor: red600}}
                  title='This is a very cool feature'
                  subtitle='Just using this will blow your mind.'
              />
              <Slide
                  media={<img src='./img/roses/03-0002.jpg' />}
                  mediaBackgroundStyle={{backgroundColor: blue400}}
                  contentStyle={{backgroundColor: blue600}}
                  title='Ever wanted to be popular?'
                  subtitle='Well just mix two colors and your are good to go!'
              />
              <Slide
                  media={<img src='./img/roses/03-0003.jpg' />}
                  mediaBackgroundStyle={{backgroundColor: green400}}
                  contentStyle={{backgroundColor: green600}}
                  title='May the force be with you'
                  subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
              />
          </AutoRotatingCarousel>

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
