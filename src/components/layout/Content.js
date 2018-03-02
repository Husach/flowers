import React, { Component } from 'react';

import Card from './../Card';

class Content extends Component {

    render() {
      return (
        <div className="content">
          <div className="content__wrapper">
            {this.props.bouquet.map((item, index) =>
                <Card item={item} key={index} />
            )}
          </div>
        </div>
      )
    }
}

export default Content;
