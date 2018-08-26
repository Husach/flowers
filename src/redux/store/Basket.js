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

    delItem({id}) {
        return this.inOrder = this.inOrder.filter(item => item.id !== id);
    }

    setQuantity({id, value}) {
        let item = this.inOrder.find(itm => itm.id === id);

        if (value === "PLUS") {
            item.quantity += 1;
            this.amount += item.price;
            this.total += 1;
        } else if (value === "MINUS" && item.quantity > 1 ) {
            item.quantity -= 1;
            this.amount -= item.price;
            this.total -= 1;
        }

        for(let i in this.inOrder) {
            if (this.inOrder[i].id === id) {
                this.inOrder[i].quantity = item.quantity;
            }
        }
    }
}

export default new BasketStore();