import SHOP_TYPES from "../types/Shop";

class Shop {
    constructor() {
        this.items = [];
        this.sortedItems = [];
        this.sortBy = null;
        this.homeItems = [];
        this.selectedCity = null;
    }

    getState() {
        return {
            sortBy: this.sortBy,
            homeItems: this.homeItems,
            sortedItems: this.sortedItems,
            selectedCity: this.selectedCity
        };
    }

    setItems({items}) {
        items.forEach(item => {
            this.items.push(item);
        });
        this.setHomeItems();

    }

    setHomeItems() {
        const category = ["tulips", "roses"];
        let items = this.items.filter(_item => _item.category.some((_category) => category.some(_filteredCategory => _category === _filteredCategory)));
        this.homeItems = [items.slice(0, 6), items.slice(6, 12)];
    }

}

const shop = new Shop();

export default function cardReducer(state = shop.getState(), action) {
    switch(action.type) {
        case SHOP_TYPES.SET_ITEMS:
            shop.setItems(action.payload);
            break;
        default:
            return state;
    }
    return shop.getState();
}
