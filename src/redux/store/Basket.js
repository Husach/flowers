class BasketStore {
    constructor() {
        this.inOrder = [];
        this.amount = 0;
        this.number = 0;
    }

    getState() {
        return {...{
            inOrder: this.inOrder,
            amount: this.amount,
            number: this.number
        }};
    }

    addItem({item}) {
        this.inOrder.push(item);
        this.amount += item.price;
        this.number += 1;
    }
}

export default new BasketStore();