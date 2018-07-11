import SHOP_TYPES from "../types/Shop";

class Shop {
    constructor() {
        this.items = [];
        this.sortBy = 1;
        this.homeItems = [];
        this.sortedItems = [];
        this.selectedCity = 12;
        this.citys = [];
        this.sortValue = [];
    }

    getState() {
        return {
            sortBy: this.sortBy,
            homeItems: this.homeItems,
            sortedItems: this.sortedItems,
            selectedCity: this.selectedCity,
            citys: this.citys,
            sortValue: this.sortValue
        };
    }

    setItems({items, location, sortParams}) {
        items.forEach(item => {
            this.items.push(item);
        });

        location.forEach(item => {
            this.citys.push(item);
        });

        sortParams.forEach(item => {
            this.sortValue.push(item);
        });
        this.setHomeItems();
    }

    setHomeItems() {
        const category = ["tulips", "roses"];
        let items = this.items.filter(_item => _item.category.some((_category) => category.some(_filteredCategory => _category === _filteredCategory)));
        this.homeItems = [items.slice(0, 5), items.slice(5, 10)];
        this.setSortItems();
    }

    setSortItems() {
        //let sortParam = sortBy ? sortBy: this.sortBy;
        //this.sortedItems = this.items.filter(item => item.sortBy.some((itm) => itm === sortBy));

        this.sortedItems = this.sortCity();
        return this.sortedItems;
    }

    sortCity() {
        let arr = [];
        this.items.forEach(item => {
            if (item.city === this.selectedCity) {
                arr.push(item)
            }
        })
        return arr;
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
