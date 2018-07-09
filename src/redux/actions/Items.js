import ITEMS_TYPES from "./../types/Items";

export const setItems = (payload) => {
    return {
        type: ITEMS_TYPES.SET_ITEMS,
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
