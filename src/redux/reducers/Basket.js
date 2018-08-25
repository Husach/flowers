import SHOP_TYPES from "../types/index";
import basket from "../store/Basket";

export default function cardReducer(state = basket.getState(), action) {
    switch(action.type) {
        case SHOP_TYPES.ADD_ITEM:
            basket.addItem(action.payload);
            break;
        case SHOP_TYPES.DEL_ITEM:
            basket.delItem(action.payload);
            break;
        case SHOP_TYPES.SET_QUANTITY:
            basket.setQuantity(action.payload);
            break;
        default:
            return state;
    }
    return basket.getState();
}

