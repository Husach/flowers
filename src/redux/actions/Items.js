import SHOP_TYPES from "../types/index";
import * as api from "../../api/index";

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

export const getDescription = (id) => (dispatch) => {
    api.getDescription(id).then(payload => {
        dispatch({
            type: SHOP_TYPES.SET_DESCRIPTION,
            payload
        })
    })
};

export const addItem = (payload) => {
    return {type: SHOP_TYPES.ADD_ITEM,payload}
};