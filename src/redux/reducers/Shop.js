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
        this.category = "";
        this.isLoadedData = false;
    }

    getState() {
        return {
            sortBy: this.sortBy,
            homeItems: this.homeItems,
            sortedItems: this.sortedItems,
            selectedCity: this.selectedCity,
            citys: this.citys,
            sortValue: this.sortValue,
            category: this.category,
            isLoadedData: this.isLoadedData
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
        this.isLoadedData = true;
    }

    setHomeItems() {
        const category = ["tulips", "roses"];
        let items = this.items.filter(_item => _item.category.some((_category) => category.some(_filteredCategory => _category === _filteredCategory)));
        this.homeItems = [items.slice(0, 5), items.slice(5, 10)];
        this.sortItems();
    }

    sortItems() {
        //let sortParam = sortBy ? sortBy: this.sortBy;
        //this.sortedItems = this.items.filter(item => item.sortBy.some((itm) => itm === sortBy));
        this.sortCity();
    }

    sortCity() {
        let arr = [];
        this.items.forEach(item => {
            if (item.city === this.selectedCity) {
                arr.push(item)
            }
        });
        return arr;
    }

    setCategoryItems({category}) {
        debugger
        this.sortedItems = this.sortCity().filter(item => item.category.some((itm) => itm === category));
        debugger
    }
}

const shop = new Shop();

export default function cardReducer(state = shop.getState(), action) {
    switch(action.type) {
        case SHOP_TYPES.SET_ITEMS:
            shop.setItems(action.payload);
            break;
        case SHOP_TYPES.SORT_ITEMS:
            shop.sortItems(action.payload);
            break;
        case SHOP_TYPES.SET_CATEGORY_ITEMS:
            shop.setCategoryItems(action.payload);
            break;
        default:
            return state;
    }
    return shop.getState();
}
