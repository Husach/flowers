import { OrderedMap, Map } from "immutable";

class BasketStore {
    constructor() {
        this.inOrder = [];
        this.amount = 0;
        this.total = 0;
        this.inOrderMap = OrderedMap();
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
        this.updateTotal();
    }

    delItem({id}) {
        return this.inOrder = this.inOrder.filter(item => item.id !== id);
    }

    updateTotal() {
        /*for(let i in this.inOrder) {
                    if (this.inOrder[i].id === id) {
                        this.inOrder[i].quantity = item.quantity;
                    }
                }*/
    }

    setCount({value, id}) {
        let count = this.inOrderMap.getIn([id, "count"]);
        let itemSum = this.inOrderMap.getIn([id, "itemSum"]);

        if (value === "PLUS") {
            count += 1;
        } else if (value === "MINUS" && count > 1 ) {
            count -= 1;
        }

        itemSum = itemSum * count;
        this.inOrderMap = this.inOrderMap.setIn([id, "count"], count);
        this.inOrderMap = this.inOrderMap.setIn([id, "price"], itemSum);
        this.updateTotal();
    }
}

export default new BasketStore();