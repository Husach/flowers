/* eslint-disable no-undef */
import cards from "./mockData";

export const fetchCards = async () => {
  return new Promise(resolve => {
    resolve(cards);
  });
};