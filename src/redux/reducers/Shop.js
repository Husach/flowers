import SHOP_TYPES from "../types/index";
import shop from "../store/Shop";

export default function cardReducer(state = shop.getState(), action) {
    switch(action.type) {
        case SHOP_TYPES.SORTER:
            shop.sorter(action.payload);
            break;
        case SHOP_TYPES.SET_CITY:
            shop.setCity(action.payload);
            break;
        case SHOP_TYPES.SET_PAGE:
            shop.setPage(action.payload);
            break;
        case SHOP_TYPES.SET_ITEMS:
            shop.setItems(action.payload);
            break;
        case SHOP_TYPES.SET_ORDER:
            shop.setOrder(action.payload);
            break;
        case SHOP_TYPES.SET_CATEGORY:
            shop.setCategory(action.payload);
            break;
        case SHOP_TYPES.SET_HOME_ITEMS:
            shop.setHomeItems(action.payload);
            break;
        default:
            return state;
    }
    return shop.getState();
}
