import SHOP_TYPES from "../types/index";
import basket from "../store/Basket";

export default function cardReducer(state = basket.getState(), action) {
    switch(action.type) {
        case SHOP_TYPES.ADD_ITEM:
            basket.addItem(action.payload);
            break;

        default:
            return state;
    }
    return basket.getState();
}
