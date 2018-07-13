    /*componentWillReceiveProps(props) {
        this.setState({
            items: this.getData(this.state.datacity, props.match.params.category)        });    }

    sorter(value) {
        this.setState({
            sortParams: value        });    }

    mySort(field) {
        let list = [...this.state.items];
        list.sort((a, b) => {
            if (a[field] > b[field]) return -1;
            if (a[field] < b[field]) return 1;
            return 0;        });
        return list;    }

    getOptions() {
        switch (this.state.sortParams) {
            case "1": return this.mySort.call(this, "rating");
            case "2": return this.mySort.call(this, "price");
            case "3": return this.mySort.call(this, "price").reverse();
            case "4": return this.mySort.call(this, "latest");
            default : return this.state.items;
        }    }
}
Shop.contextTypes = {
    router: PropTypes.object};*/