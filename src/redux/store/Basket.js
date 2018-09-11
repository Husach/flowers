import { OrderedMap, Map } from "immutable";

class BasketStore {
    constructor() {
        this.inOrderMap = OrderedMap();
        this.amount = 0;
        this.total = 0;
    }

    getState() {
        return {...{
            inOrderMap: this.inOrderMap,
            amount: this.amount,
            total: this.total
        }};
    }

    addItem({item}) {
        if(this.inOrderMap.has(item.id)) {
            let count = this.inOrderMap.getIn([item.id, "count"]);
            let itemSum = this.inOrderMap.getIn([item.id, "itemSum"]);
            count += 1;
            itemSum = itemSum * count;
            this.inOrderMap = this.inOrderMap.setIn([item.id, "count"], count);
            this.inOrderMap = this.inOrderMap.setIn([item.id, "itemSum"], itemSum);
        } else {
            this.inOrderMap = this.inOrderMap.set(item.id, Map({item, count: 1, itemSum: item.price}));
        }
        localStorage.setItem(item.id, item.id);
        this.updateTotal();
    }

    delItem(id) {
        this.inOrderMap = this.inOrderMap.delete(id);
        this.updateTotal();
    }

    updateTotal() {
        this.amount = 0;
        this.total = 0;
        this.inOrderMap.forEach((item) => {
            this.amount += item.get("itemSum");
            this.total += item.get("count");
        })
    }

    setCount({value, id}) {
        let count = this.inOrderMap.getIn([id, "count"]);
        let item = this.inOrderMap.getIn([id, "item"]);

        if (value === "PLUS") {
            count += 1;
        } else if (value === "MINUS" && count > 1 ) {
            count -= 1;
        }

        let itemSum = item.price * count;
        this.inOrderMap = this.inOrderMap.setIn([id, "count"], count);
        this.inOrderMap = this.inOrderMap.setIn([id, "itemSum"], itemSum);
        this.updateTotal();
    }
}

export default new BasketStore();