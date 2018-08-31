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

export const getDescription = (id) => async (dispatch) => {
    try {
        let {data: payload} = await axios.post("https://node-az.herokuapp.com/api/get-flower-by-id", {id});

        dispatch({
            type: SHOP_TYPES.SET_DESCRIPTION,
            payload
        })
    } catch(err) {
        console.error(err)
    }

    /*axios.post("https://node-az.herokuapp.com/api/get-flower-by-id", {id}).then(({data: payload}) => {
    dispatch({
        type: SHOP_TYPES.SET_DESCRIPTION,
        payload
    })
    })*/
    /*api.getDescription(id).then(payload => { })*/
};

export const addItem = (payload) => {
    return {type: SHOP_TYPES.ADD_ITEM,payload}
};
export const delItem = (payload) => {
    return {type: SHOP_TYPES.DEL_ITEM,payload}
};
export const setCount = (payload) => {
    return {type: SHOP_TYPES.SET_COUNT,payload}
};