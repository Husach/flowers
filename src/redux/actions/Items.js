import SHOP_TYPES from "../types/Shop";

export const setItems = (payload) => {
    return {
        type: SHOP_TYPES.SET_ITEMS,
        payload
    }
};

export const setSortItems = (payload) => {
    return {
        type: SHOP_TYPES.SET_SORT_ITEMS,
        payload
    }
};