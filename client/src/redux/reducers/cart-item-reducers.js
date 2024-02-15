import * as actionTypes from "../actions/action-types";
import { initialCartItems } from "./initialState";

const cartItemReducer = (state = initialCartItems, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART_ITEM:
      const index = state.findIndex((v) => v.product.id === action.payload.id);
      let item;
      if (index >= 0) {
        item = {
          product: action.payload,
          quantity: state[index].quantity + 1,
        };
        state[index] = item;
        return state.map((v) => v);
      } else {
        item = {
          product: action.payload,
          quantity: 1,
        };
        return [...state, item];
      }
    case actionTypes.REMOVE_CART_ITEM:
      return state.filter((v) => v.product.id !== action.payload.id);
    default:
      return state;
  }
};

export default cartItemReducer;
