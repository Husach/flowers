import {combineReducers} from "redux";

import cards from "./cards";
import cardsPage from "./cardsPage";

export default combineReducers({
  cards,
  cardsPage
})