class BasketStore {
    constructor() {
        this.inOrder = [];
        this.amount = 0;
        this.total = 0;
    }

    getState() {
        return {...{
            inOrder: this.inOrder,
            amount: this.amount,
            total: this.total
        }};
    }

    addItem({item}) {
        this.inOrder.push(item);
        let length = this.inOrder.length - 1;
        this.inOrder[length].quantity = 1;

        this.amount += item.price;
        this.total += 1;
    }

    delItem() {
        console.log("delItem WORKS !!!!")
    }

    setQuantity({id, value}) {
        let item = this.inOrder.find(itm => itm.id === id);

        if (value === "PLUS") {
            item.quantity += 1;
            this.amount += item.price;
            this.total += 1;
        } else if (value === "MINUS" && this.total > 1 ) {
            item.quantity -= 1;
            this.amount -= item.price;
            this.total -= 1;
        }
    }
}

export default new BasketStore();