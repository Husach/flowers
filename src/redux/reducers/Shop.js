import SHOP_TYPES from "../types/Shop";

class Shop {
    constructor() {
        this.items = [];
        this.sortBy = 1;
        this.homeItems = [];
        this.sortedItems = [];
        this.selectedCity = 12;
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
        this.setSortItems();
    }

    setSortItems() {
        //let sortParam = sortBy ? sortBy: this.sortBy;
        //this.sortedItems = this.items.filter(item => item.sortBy.some((itm) => itm === sortBy));

        this.sortedItems = this.items;
        this.sortedItems = this.sortCity();
        return this.sortedItems;
    }

    sortCity() {
        let data = [];
        this.sortedItems.forEach(item => {
            if (item.city === this.selectedCity) {
                data.push(item)
            }
        })
        return data;
    }
}

const shop = new Shop();

export default function cardReducer(state = shop.getState(), action) {
    switch(action.type) {
        case SHOP_TYPES.SET_ITEMS:
            shop.setItems(action.payload);
            break;
        case SHOP_TYPES.SET_SORT_ITEMS:
            shop.setSortItems(action.payload);
            break;
        default:
            return state;
    }
    return shop.getState();
}
