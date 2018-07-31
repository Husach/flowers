import { OrderedMap, Map } from "immutable";

class ShopStore {
    constructor() {
        this.sortBy = 1;
        this.selectedCity = 11;
        this.category = "";
        this.isLoadedData = false;
        this.itemsLimiter = 8;
        this.currentPage = 0;
        this.totalPages = 1;
        this.order = [];                    //variants for sort
        this.location = [];                 //all citys
        this.itemsMap = OrderedMap();              //all items
        this.homeItemsMap = OrderedMap();          //for start page
        this.sortedItemsMap = OrderedMap();        //sort with params
        this.pageItemsMap = OrderedMap();          //item for current page
        this.descriptionItemMap = Map();    //item for description page
    }

    getState() {
        return {...{
            sortBy: this.sortBy,
            selectedCity: this.selectedCity,
            category: this.category,
            isLoadedData: this.isLoadedData,
            itemsLimiter: this.itemsLimiter,
            currentPage: this.currentPage,
            totalPages: this.totalPages,
            order: this.order,
            location: this.location,
            itemsMap: this.itemsMap,
            homeItemsMap: this.homeItemsMap,
            sortedItemsMap: this.sortedItemsMap,
            pageItemsMap: this.pageItemsMap,
            descriptionItemMap: this.descriptionItemMap
        }};
    }

    setItems({items, location, order}) {
        this.isLoadedData = true;
        order.forEach(item => {this.order.push(item)});
        location.forEach(item => {this.location.push(item)});
        items.forEach(item => {this.itemsMap = this.itemsMap.set(item.id, item)});
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
            default : return this.itemsMap;
        }
    }

    reverseOrder(field) {
        this.sorter(field);
        this.sortedItemsMap = this.sortedItemsMap.reverse();
    }

    setPage(value) {
        this.currentPage = value.selected;
        this.divideIntoPages();
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
        this.divideIntoPages.call(this);
    }

    divideIntoPages() {
        //sort for Paginate
        this.totalPages = Math.ceil(this.sortedItemsMap.size / this.itemsLimiter);
        let start = this.currentPage * 8;
        let end = (this.currentPage + 1) * 8;
        this.pageItemsMap = this.sortedItemsMap.slice(start, end);
    }
}

export default new ShopStore();