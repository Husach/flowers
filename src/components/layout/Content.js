import React, { Component } from 'react';
import Select from './../Select';

import Card from './../Card';

const sort = [
  {
    value: '1',
    primaryText: 'по рейтингу'
  },
  {
    value: '2',
    primaryText: 'новинки'
  },
  {
    value: '3',
    primaryText: 'цена: по возрастанию'
  },
  {
    value: '4',
    primaryText: 'цена: по убыванию'
  }
];

const city = [
  {
    value: '1',
    primaryText: 'Kremenchuk'
  }
];

class Content extends Component {

  render() {
    return (
      <div className="page-main">
        <div className="filter">
          <Select options={city} selected={null} name="Location" />
          <Select options={sort} selected={null} name="Sort" />
        </div>
        <div className="content">
          {this.props.data.map((item, index) =>
              <Card item={item} key={index} />
          )}
        </div>
      </div>
    );
  }
}

export default Content;
