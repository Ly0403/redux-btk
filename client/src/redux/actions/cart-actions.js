import * as actions from "./action-types";
export const addCartItem = (item) => {
  return {
    type: actions.ADD_CART_ITEM,
    payload: item,
  };
};

export const removeCartItem = (item) => {
  return {
    type: actions.REMOVE_CART_ITEM,
    payload: item,
  };
};
