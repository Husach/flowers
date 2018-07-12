import SHOP_TYPES from "../types/Shop";

class Shop {
    constructor() {
        this.items = [];
        this.sortBy = 1;
        this.homeItems = [];
        this.sortedItems = [];
        this.selectedCity = 11;
        this.locations = [];
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
            locations: this.locations,
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
            this.locations.push(item);
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

    //TODO
    sortItems() {
        this.sortCity();
    }

    sortCategory({category}) {
        this.sortedItems = this.sortCity().filter(item => item.category.some((itm) => itm === category));
    }

    //TODO
    sortCity() {
        this.selectedCity = this.selectedCity ? this.selectedCity: 11;
        console.log("sortCity")
        let tmp = [];
        this.items.forEach(item => {
            if (item.city === this.selectedCity) {
                tmp.push(item)
            }
        });
        return tmp;
    }

    //TODO
    sortOrder() {
        switch (this.sortBy) {
            case "1": return this.setOrder.call(this, "rating");
            case "2": return this.setOrder.call(this, "price");
            case "3": return this.setOrder.call(this, "price").reverse();
            case "4": return this.setOrder.call(this, "latest");
            default : return this.sortedItems;
        }
    }

    //TODO
    setOrder(field) {
        let tmp = [...this.sortedItems];
        this.sortedItems =  tmp.sort((a, b) => {
            if (a[field] > b[field]) return -1;
            if (a[field] < b[field]) return 1;
            return 0;
        });
    }
}

const shop = new Shop();

export default function cardReducer(state = shop.getState(), action) {
    switch(action.type) {
        case SHOP_TYPES.SET_ITEMS:
            shop.setItems(action.payload);
            break;
        case SHOP_TYPES.SORT_CITY:
            shop.sortCity(action.payload);
            break;
        case SHOP_TYPES.SORT_ITEMS:
            shop.sortItems(action.payload);
            break;
        case SHOP_TYPES.SORT_ORDER:
            shop.sortOrder(action.payload);
            break;
        case SHOP_TYPES.SORT_CATEGORY:
            shop.sortCategory(action.payload);
            break;
        default:
            return state;
    }
    return shop.getState();
}
