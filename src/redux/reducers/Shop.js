import SHOP_TYPES from "../types/Shop";

class Shop {
    constructor() {
        this.items = [];
        this.homeItems = [];
        this.sortedItems = [];
        this.sortBy = 1;
        this.order = [];
        this.selectedCity = 11;
        this.location = [];
        this.category = "";
        this.isLoadedData = false;
    }

    getState() {
        return {
            homeItems: this.homeItems,
            sortedItems: this.sortedItems,
            sortBy: this.sortBy,
            order: this.order,
            selectedCity: this.selectedCity,
            location: this.location,
            category: this.category,
            isLoadedData: this.isLoadedData
        };
    }

    setItems({items, location, order}) {
        items.forEach(item => {
            this.items.push(item);
        });

        location.forEach(item => {
            this.location.push(item);
        });

        order.forEach(item => {
            this.order.push(item);
        });
        this.setHomeItems();
        this.isLoadedData = true;
    }

    setHomeItems() {
        const category = ["tulips", "roses"];
        let items = this.items.filter(_item => _item.category.some((_category) => category.some(_filteredCategory => _category === _filteredCategory)));
        this.homeItems = [items.slice(0, 5), items.slice(5, 10)];
    }

    sorter(field) {
        //sort Category
        let sortedItems = this.items.filter(item => item.category.some((itm) => itm === this.category));

        //sort City
        sortedItems = sortedItems.filter(item => {return (item.city === this.selectedCity)});

        //sort Order
        this.sortedItems =  sortedItems.sort((a, b) => {
            if (a[field] > b[field]) return -1;
            if (a[field] < b[field]) return 1;
            return 0;
        });
    }

    setCategory({category}) {
        this.category = category;
        this.sorter();
    }

    setCity({city}) {
        this.selectedCity = city;
        this.sorter();
    }

    setOrder({sortBy}) {
        switch (sortBy) {
            case 1: return this.sorter.call(this, "rating");
            case 2: return this.sorter.call(this, "price");
            case 3: return this.sorter.call(this, "price").reverse();
            case 4: return this.sorter.call(this, "latest");
            default : return this.items;
        }
    }
}

const shop = new Shop();

export default function cardReducer(state = shop.getState(), action) {
    switch(action.type) {
        case SHOP_TYPES.SORTER:
            shop.sorter(action.payload);
            break;
        case SHOP_TYPES.SET_CITY:
            shop.setCity(action.payload);
            break;
        case SHOP_TYPES.SET_ITEMS:
            shop.setItems(action.payload);
            break;
        case SHOP_TYPES.SET_ORDER:
            shop.setOrder(action.payload);
            break;
        case SHOP_TYPES.SET_CATEGORY:
            shop.setCategory(action.payload);
            break;
        default:
            return state;
    }
    return shop.getState();
}
