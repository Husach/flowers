import { Map } from "immutable";

class ShopStore {
    constructor() {
            this.items = [];            //all items
            this.sortedItems = [];      //sort with params
            this.pageItems = [];        //item for current page
        this.sortBy = 1;
            this.order = [];
        this.selectedCity = 11;
            this.location = [];         //all citys
        this.category = "";
        this.isLoadedData = false;
        this.itemsLimiter = 8;
        this.currentPage = 0;
        this.totalPages = 1;
        this.itemsMap = Map();            //all items
        this.homeItemsMap = Map();        //for start page
        this.sortedItemsMap = Map();      //sort with params
        this.pageItemsMap = Map;          //item for current page
        this.orderMap = Map();
        this.locationMap = Map();         //all citys
    }

    getState() {
        return {...{
            items: this.items,
            sortedItems: this.sortedItems,
            pageItems: this.pageItems,
            sortBy: this.sortBy,
            order: this.order,
            selectedCity: this.selectedCity,
            location: this.location,
            category: this.category,
            isLoadedData: this.isLoadedData,
            itemsLimiter: this.itemsLimiter,
            currentPage: this.currentPage,
            totalPages: this.totalPages,
            itemsMap: this.itemsMap,
            homeItemsMap: this.homeItemsMap,
            sortedItemsMap: this.sortedItemsMap,
            pageItemsMap: this.pageItemsMap,
            orderMap: this.orderMap,
            locationMap: this.locationMap
        }};
    }

    setItems({items, location, order}) {
        /*items.forEach(item => {
            this.items.push(item);
        });

        location.forEach(item => {
            this.location.push(item);
        });

        order.forEach(item => {
            this.order.push(item);
        });
        this.isLoadedData = true;*/
    /*}

    setItems({items, location, order}) {*/
        //debugger
        //let itemsMap = new Map();
        items.forEach(item => {
            this.itemsMap = this.itemsMap.set(item.id, item);
        });

        let locationMap = new Map();
        location.forEach(item => {
            locationMap = locationMap.set(item.value, item);
        });

        let orderMap = new Map();
        order.forEach(item => {
            orderMap = orderMap.set(item.value, item);
        });

        this.isLoadedData = true;

        console.log(this.itemsMap);
        console.log(locationMap);
        console.log(orderMap);
    }

    setHomeItems({items}) {
        let itemsMap = new Map();

        items.forEach(item => {
            itemsMap = itemsMap.set(item.id, item);
        });

        const category = ["tulips", "roses"];

        category.forEach((category) => {
            let tmp = itemsMap.filter(_item => _item.category.some(_filteredCategory => category === _filteredCategory));
            this.homeItemsMap = this.homeItemsMap.merge(this.homeItemsMap, tmp.slice(0, 5))
        });
    }

    setCategory({category}) {
        //debugger
        this.category = category;
        this.currentPage = 0;
        this.sorter();
    }

    setCity({city}) {
        this.selectedCity = city;
        this.currentPage = 0;
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

    setPage(value) {
        this.currentPage = value.selected;
        this.sorter();
    }

    sorter(field) {
        //debugger
        //sort Category
        let sortedItems = this.itemsMap.filter(item => item.category.some((itm) => itm === this.category));

        //sort City
        sortedItems = sortedItems.filter(item => {return (item.city === this.selectedCity)});

        //sort Order
        this.sortedItems =  sortedItems.sort((a, b) => {
            if (a[field] > b[field]) return -1;
            if (a[field] < b[field]) return 1;
            return 0;
        });
        debugger
        //this.sorterPage.call(this);
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

export default new ShopStore();