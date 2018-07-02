import R from "ramda";
import cardsPage from "./reducers/cardsPage";

const getCardsById = (state, id) => R.prop(id, state.cards);

export const gerCards = state => {
  const cards = R.map(id => getCardsById(state, id), state,cardsPage.ids)
  return cards
}