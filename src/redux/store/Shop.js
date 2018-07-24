import { Map } from "immutable";

class ShopStore {
    constructor() {
            this.items = [];            //all items
            this.sortedItems = [];      //sort with params
            this.pageItems = [];        //item for current page
            this.order = [];
            this.location = [];         //all citys
        this.sortBy = 1;
        this.selectedCity = 11;
        this.category = "";
        this.isLoadedData = false;
        this.itemsLimiter = 8;
        this.currentPage = 0;
        this.totalPages = 1;

        this.itemsMap = Map();              //all items
        this.homeItemsMap = Map();          //for start page
        this.sortedItemsMap = Map();        //sort with params
        this.pageItemsMap = Map();          //item for current page
        this.descriptionItemMap = Map();    //item for description page
        this.orderMap = Map();              //variants for sort
        this.locationMap = Map();           //all citys
    }

    getState() {
        return {...{
                items: this.items,
                sortedItems: this.sortedItems,
                pageItems: this.pageItems,
                order: this.order,
                location: this.location,
            sortBy: this.sortBy,
            selectedCity: this.selectedCity,
            category: this.category,
            isLoadedData: this.isLoadedData,
            itemsLimiter: this.itemsLimiter,
            currentPage: this.currentPage,
            totalPages: this.totalPages,

            itemsMap: this.itemsMap,
            homeItemsMap: this.homeItemsMap,
            sortedItemsMap: this.sortedItemsMap,
            pageItemsMap: this.pageItemsMap,
            descriptionItemMap: this.descriptionItemMap,
            orderMap: this.orderMap,
            locationMap: this.locationMap
        }};
    }

    setItems({items, location, order}) {
        /*items.forEach(item => {            this.items.push(item);        });        location.forEach(item => {            this.location.push(item);        });        order.forEach(item => {            this.order.push(item);        });        this.isLoadedData = true;*/    /*}        setItems({items, location, order}) {*/

        items.forEach(item => {this.itemsMap = this.itemsMap.set(item.id, item)});
        order.forEach(item => {this.orderMap = this.orderMap.set(item.value, item)});
        location.forEach(item => {this.locationMap = this.locationMap.set(item.value, item)});
        this.isLoadedData = true;
    }

    setHomeItems({items}) {
        const category = ["tulips", "roses"];
        items.forEach(item => {this.itemsMap = this.itemsMap.set(item.id, item)});
        category.forEach((category) => {
            let tmp = this.itemsMap.filter(_item => _item.category.some(_filteredCategory => category === _filteredCategory));
            this.homeItemsMap = this.homeItemsMap.merge(this.homeItemsMap, tmp.slice(0, 5))
        });
    }

    setCategory({category}) {
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
        //sort Category
        let tmp = this.itemsMap.filter(item => item.category.some((itm) => itm === this.category));

        //sort City
        tmp = tmp.filter(item => {return (item.city === this.selectedCity)});

        //sort Order
        this.sortedItemsMap =  tmp.sort((a, b) => {
            if (a[field] > b[field]) return -1;
            if (a[field] < b[field]) return 1;
            return 0;
        });
        //this.sorterPage.call(this);
    }

    sorterPage() {
        //sort for Paginate
        this.totalPages = Math.ceil(this.sortedItemsMap.size / this.itemsLimiter);

        let tmp = [];
        for (let i = 0; i < this.itemsLimiter; i++) {
            if (this.currentPage === 0 && this.sortedItems[i] !== undefined) {
                tmp.push(this.sortedItemsMap[i]);
            } else if (this.sortedItemsMap[((this.currentPage) * this.itemsLimiter) + i] !== undefined) {
                tmp.push(this.sortedItemsMap[((this.currentPage) * this.itemsLimiter) + i]);
            } else {
                i = this.itemsLimiter;
            }
        }
        this.pageItemsMap = tmp;
    }
}

export default new ShopStore();