import SHOP_TYPES from "../types/index";
/*import * as api from "../../api/index";*/
import axios from "axios";

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
    axios.post("https://node-az.herokuapp.com/api/get-flower-by-id", {id}).then(({data: payload}) => {
        dispatch({
            type: SHOP_TYPES.SET_DESCRIPTION,
            payload
        })
    })
    /*api.getDescription(id).then(payload => { })*/
};

export const addItem = (payload) => {
    return {type: SHOP_TYPES.ADD_ITEM,payload}
};
export const delItem = (payload) => {
    return {type: SHOP_TYPES.DEL_ITEM,payload}
};
export const setQuantity = (payload) => {
    return {type: SHOP_TYPES.SET_QUANTITY,payload}
};