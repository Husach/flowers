import { combineReducers } from "redux";
import shop from "./Shop"
import basket from "./Basket"

export default combineReducers({
    shop,
    basket
});
