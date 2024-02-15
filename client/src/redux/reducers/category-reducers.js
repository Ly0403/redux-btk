import * as categoryActions from "../actions/action-types";
import { initialCategory } from "./initialState";
export const changeCategoryReducer = (state = initialCategory, action) => {
  switch (action.type) {
    case categoryActions.CHANGE_CURRENT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};
