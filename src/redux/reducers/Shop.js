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
        this.currentPage = 1;
        this.itemsLimiter = 8;
        this.pages = 1;
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
            isLoadedData: this.isLoadedData,
            currentPage: this.currentPage,
            itemsLimiter: this.itemsLimiter,
            pages: this.pages
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

        //sort Paginate

        this.pages = Math.ceil(sortedItems.length / this.itemsLimiter);

        let pageItems = [];
        for (let i = 0; i < this.itemsLimiter; i++) {
            if (this.currentPage === 1 && this.sortedItems[i] !== undefined) {
                pageItems[i] = this.sortedItems[i];
            } else if (this.sortedItems[((this.currentPage - 1) * this.itemsLimiter) + i] !== undefined) {
                pageItems[i] = this.sortedItems[((this.currentPage - 1) * this.itemsLimiter) + i];
            } else {
                i = this.itemsLimiter;
            }
        }
        //TODO передавать в другой массив, отрисовывать уже новый массив
        this.sortedItems = pageItems;
    }

    setCategory({category}) {
        this.category = category;
        this.currentPage = 1;
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
        debugger
        this.currentPage = value.selected + 1;
        this.sorter();
    }

    /*pageChange(data) {
        this.setState({
            currentPage: data.selected + 1        });    }

    getNumberPages(items) {
        let pages = Math.ceil(items.size / this.state.limiter);
        this.setState({pages});
    }

    newData() {
        let items = this.props.items;
        let array = [];
        if(!this.props.data.length) return array;
        console.log("1 length:", this.props.data.length, "pages:", this.state.pages, "data:", this.props.data);
        for (let i = 0; i < this.state.limiter; i++) {
            if (this.state.currentPage === 1 && this.props.data[i] !== undefined) {
                array[i] = this.props.data[i];
            } else if (this.props.data[((this.state.currentPage - 1) * this.state.limiter) + i] !== undefined) {
                array[i] = this.props.data[((this.state.currentPage - 1) * this.state.limiter) + i];
            } else {
                i = this.state.limiter;
            }        }
        console.log("2 new array:", array);
        return array;
        return [];    }*/
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
