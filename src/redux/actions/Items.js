import SHOP_TYPES from "../types/Shop";

export const setItems = (payload) => {
    return {
        type: SHOP_TYPES.SET_ITEMS,
        payload
    }
};

export const sortItems = (payload) => {
    return {
        type: SHOP_TYPES.SORT_ITEMS,
        payload
    }
};

export const setCategoryItems = (payload) => {
    return {
        type: SHOP_TYPES.SET_CATEGORY_ITEMS,
        payload
    }
};