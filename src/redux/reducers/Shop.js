import SHOP_TYPES from "../types/Shop";

class Shop {
    constructor() {
        this.items = [];            //all items
        this.homeItems = [];        //for start page
        this.sortedItems = [];      //sort with params
        this.pageItems = [];        //item for current page
        this.sortBy = 1;
        this.order = [];
        this.selectedCity = 11;
        this.location = [];         //all citys
        this.category = "";
        this.isLoadedData = false;
        this.currentPage = 0;
        this.itemsLimiter = 8;
        this.totalPages = 1;
    }

    getState() {
        return {...{
            homeItems: this.homeItems,
            sortedItems: this.sortedItems,
            pageItems: this.pageItems,
            sortBy: this.sortBy,
            order: this.order,
            selectedCity: this.selectedCity,
            location: this.location,
            category: this.category,
            isLoadedData: this.isLoadedData,
            currentPage: this.currentPage,
            itemsLimiter: this.itemsLimiter,
            totalPages: this.totalPages,
            items: this.items
        }};
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

    setCategory({category}) {
        this.category = category;
        this.currentPage = 0;
        this.sorter();
    }

    setCity({city}) {
        this.selectedCity = city;
        this.sorter();
    }

    setOrder({sortBy}) {
        this.sortBy = sortBy;
        switch (this.sortBy) {
            case 1: return this.sorter.call(this, "rating");
            case 2: return this.sorter.call(this, "price");
            case 3: return this.reverseOrder.call(this, "price");
            case 4: return this.sorter.call(this, "latest");
            default : return this.items;
        }
    }

    reverseOrder(field) {
        this.sorter(field);
        this.sortedItems.reverse();
    }

    changePage(value) {
        this.currentPage = value.selected;
        this.sorter();
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

        this.sorterPage.call(this);
    }

    sorterPage() {
        //sort for Paginate
        this.totalPages = Math.ceil(this.sortedItems.length / this.itemsLimiter);

        let tmp = [];
        for (let i = 0; i < this.itemsLimiter; i++) {
            if (this.currentPage === 0 && this.sortedItems[i] !== undefined) {
                tmp.push(this.sortedItems[i]);
            } else if (this.sortedItems[((this.currentPage) * this.itemsLimiter) + i] !== undefined) {
                tmp.push(this.sortedItems[((this.currentPage) * this.itemsLimiter) + i]);
            } else {
                i = this.itemsLimiter;
            }
        }

        this.pageItems = tmp;
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
        case SHOP_TYPES.CHANGE_PAGE:
            shop.changePage(action.payload);
            break;
        default:
            return state;
    }
    return shop.getState();
}
