class BasketStore {
    constructor() {
        this.inOrder = [];
    }

    getState() {
        return {...{
            inOrder: this.inOrder
        }};
    }

    addItem({item}) {
        debugger;
        console.log("BasketStore debugger", item);

    }

}

export default new BasketStore();