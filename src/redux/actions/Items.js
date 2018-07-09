import SHOP_TYPES from "../types/Shop";

export const setItems = (payload) => {
    return {
        type: SHOP_TYPES.SET_ITEMS,
        payload
    }
};




/*
export function sortCard(payload) {
    return {
        type: 'SORT_CARD',
        payload
    };
}*/
