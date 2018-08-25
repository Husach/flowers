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
}

export default new BasketStore();