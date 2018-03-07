import React, { Component } from 'react';

import Card from './../Card';

class Content extends Component {

  render() {
    return [
      <div className="page-main">
        <div className="content">
          {this.props.data.map((item, index) =>
              <Card item={item} key={index} />
          )}
        </div>
      </div>,
      <div className="page-footer">
      </div>
    ];
  }
}

export default Content;
