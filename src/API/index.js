import { Map, OrderedMap } from "immutable";

class API {
    constructor() {
        this.isLoadedData = false;
        this.order = [];                           //variants for sort
        this.location = [];                        //all citys
        this.itemsMap = OrderedMap();              //all items
        this.descriptionItem = Map();              //all items
    }

    setItems({items, location, order}) {
        this.isLoadedData = true;
        order.forEach(item => {this.order.push(item)});
        location.forEach(item => {this.location.push(item)});
        items.forEach(item => {this.itemsMap = this.itemsMap.set(item.id, item)});
    }

    getItem() {
        let { id } = this.props.params;
        this.descriptionItem = this.props.itemsMap.get(id);
        if(this.descriptionItem) {
            return {};
        }
        return this.descriptionItem;
    }
}

export default new API();