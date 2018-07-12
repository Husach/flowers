import React from "react";
import PropTypes from "prop-types";
import Base from "../container/Base.jsx";
import Content from "../container/Content.jsx";
import { shop } from "./../redux/reducers/Shop";

class Shop extends Base {

    constructor(props, context) {
        super(props, context);
        /*let {router: {route: {match: {params}}}} = this.context;
        this.category = params.category*/
    }

   /* componentWillReceiveProps(props) {
        let {router: {route: {match: {params}}}} = this.context;
        this.category = params.category
        debugger
    }*/


    /*componentDidMount() {
        this.getCity.call(this);
    }*/

    /*componentWillReceiveProps(props) {
        this.setState({
            items: this.getData(this.state.datacity, props.match.params.category)
        });
    }

    getData(d, category) {
        if (category) {
              return d.filter(item => item.category.some((itm) => itm === category));
        }
        return d;
     }*/

    /*    sorter(value) {
        this.setState({
            sortValue: value
        });
    }

    mySort(field) {
        let list = [...this.state.items];
        list.sort((a, b) => {
            if (a[field] > b[field]) return -1;
            if (a[field] < b[field]) return 1;
            return 0;
        });
        return list;
    }

    getOptions() {
        switch (this.state.sortValue) {
            case "1": return this.mySort.call(this, "rating");
            case "2": return this.mySort.call(this, "price");
            case "3": return this.mySort.call(this, "price").reverse();
            case "4": return this.mySort.call(this, "latest");
            default : return this.state.items;
        }
    }*/

    /*getCity() {
        let {router: {route: {match: {params}}}} = this.context;
        let datacity = [];
        this.props.sortedItems.forEach(item => {
        if(item.city === this.state.currentCity) {
            datacity.push(item);
        }
    });

    let items = this.getData(datacity, params.category);

    this.setState({
        datacity,
        items
      });
    }*/

     /*city(value) {
        this.setState({
            currentCity: value
        }, () => {
            this.getCity.call(this);
        });
    }*/

    renderContainer() {
        return (
            <Content
               /* category={this.category}*/
                /*items={this.getOptions.call(this)} city={::this.city} sorter={::this.sorter} sortValue={this.state.sortValue} currentCity={this.state.currentCity}*/
            />
        );
    }
}

Shop.contextTypes = {
    router: PropTypes.object
};

export default Shop;