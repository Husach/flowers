import SHOP_TYPES from "../types/Shop";

export const setItems = (payload) => {
    return {
        type: SHOP_TYPES.SET_ITEMS,
        payload
    }
};
export const sortCity = (payload) => {
    return {
        type: SHOP_TYPES.SORT_CITY,
        payload
    }
};
export const sortItems = (payload) => {
    return {
        type: SHOP_TYPES.SORT_ITEMS,
        payload
    }
};
export const sortOrder = (payload) => {
    return {
        type: SHOP_TYPES.SORT_ORDER,
        payload
    }
};
export const sortCategory = (payload) => {
    return {
        type: SHOP_TYPES.SORT_CATEGORY,
        payload
    }
};