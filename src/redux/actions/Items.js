import SHOP_TYPES from "../types/Shop";

export const setItems = (payload) => {
    return {
        type: SHOP_TYPES.SET_ITEMS,
        payload
    }
};