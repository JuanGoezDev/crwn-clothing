import { cartActionTypes } from "./types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CARD_HIDDEN,
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});