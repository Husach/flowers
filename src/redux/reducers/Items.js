import ITEMS_TYPES from "./../types/Items";

class Items {
    constructor() {
        this.items = new Map();
    }

    getState() {
        return this.items;
    }

    setItems({items}) {
        items.forEach(item => {
            this.items.set(item.id, item);
        });
    }

}

const items = new Items();

export default function cardReducer(state = items.getState(), action) {
    switch(action.type) {
        case ITEMS_TYPES.SET_ITEMS:
            items.setItems(action.payload);
            break;
        default:
            return state;
    }
    return items.getState();
}
