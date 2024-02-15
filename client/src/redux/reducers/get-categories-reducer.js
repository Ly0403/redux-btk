import * as actionTypes from "../actions/action-types";
import { initialGetCategories } from "./initialState";

const getCategoriesReducer = (state = initialGetCategories, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default getCategoriesReducer;