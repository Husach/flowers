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
        /*this.amount += item.price;
        this.total += 1;*/

        if(this.inOrderMap.has(item.id)) {
            let count = this.inOrderMap.getIn([item.id, "count"]);
            let price = this.inOrderMap.getIn([item.id, "price"]);
            count += 1;
            price = price * count;
            this.inOrderMap = this.inOrderMap.setIn([item.id, "count"], count);
            this.inOrderMap = this.inOrderMap.setIn([item.id, "price"], price);
        } else {
            this.inOrderMap = this.inOrderMap.set(item.id, Map({item, count: 1, price: item.price}));
        }
    }

    delItem({id}) {
        return this.inOrder = this.inOrder.filter(item => item.id !== id);
    }

    setQuantity({id, value}) {
        //let item = this.inOrder.find(itm => itm.id === id);

        /*if (value === "PLUS") {
            item.quantity += 1;
            this.amount += item.price;
            this.total += 1;
        } else if (value === "MINUS" && item.quantity > 1 ) {
            item.quantity -= 1;
            this.amount -= item.price;
            this.total -= 1;
        }*/

        /*for(let i in this.inOrder) {
            if (this.inOrder[i].id === id) {
                this.inOrder[i].quantity = item.quantity;
            }
        }*/
    }
}

export default new BasketStore();