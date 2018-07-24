import SHOP_TYPES from "../types/index";

export const sorter = (payload) => {
    return {type: SHOP_TYPES.SORTER, payload}
};
export const setCity = (payload) => {
    return {type: SHOP_TYPES.SET_CITY, payload}
};
export const setPage = (payload) => {
    return {type: SHOP_TYPES.SET_PAGE,payload}
};
export const setItems = (payload) => {
    return {type: SHOP_TYPES.SET_ITEMS,payload}
};
export const setOrder = (payload) => {
    return {type: SHOP_TYPES.SET_ORDER,payload}
};
export const setCategory = (payload) => {
    return {type: SHOP_TYPES.SET_CATEGORY,payload}
};
export const setHomeItems = (payload) => {
    return {type: SHOP_TYPES.SET_HOME_ITEMS,payload}
};