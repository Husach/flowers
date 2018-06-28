import React, { Component } from "react";
import Select from "../Select.jsx";
import Card from "./Card.jsx";

const sort = [
  {
    value: "1",
    primaryText: "по рейтингу"
  },
  {
    value: "2",
    primaryText: "цена: по убыванию"
  },
  {
    value: "3",
    primaryText: "цена: по возрастанию"
  },
  {
    value: "4",
    primaryText: "новинки"
  }
];

const citys = [
  {
    value: 11,
    primaryText: "Кременчуг"
  },
  {
    value: 12,
    primaryText: "Киев"
  },
  {
    value: 13,
    primaryText: "Харьков"
  }
];

class Content extends Component {
  handleChange(event, index, value) {
    this.props.sorter(value);
  }

  cityChange(event, index, value) {
    this.props.city(value);
  }

  render() {    
    return (
      <div className="page-main">
        <div className="filter">
          <Select options={citys}
                  selected={this.props.currentCity}
                  name="Город"
                  handleChange={::this.cityChange}
          />
          <Select options={sort}
                  selected={this.props.sortValue}
                  name="Сортировка"
                  handleChange={::this.handleChange}
          />
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
