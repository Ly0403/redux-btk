import * as actionTypes from "../actions/action-types";
import { initialGetProducts } from "./initialState";

const getProductsReducer = (state = initialGetProducts, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default getProductsReducer;