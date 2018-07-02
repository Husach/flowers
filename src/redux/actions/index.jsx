import {
  FETCH_PHONES_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE
} from "../actionTypes";

import {fetchCards as fetchCardsApi} from "../api";

export const fetchCards = () => async dispatch => {
  dispatch({type: FETCH_PHONES_START});

  try {
    const cards = await fetchCardsApi();
    dispatch({
      type: FETCH_CARDS_SUCCESS,
      payload: cards
    })
  } catch (err) {
    dispatch({
      type: FETCH_CARDS_FAILURE,
      payload: err,
      error: true
    })
  }


};