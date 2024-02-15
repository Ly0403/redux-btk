import fetchData from "../../components/common/fetchData";
import * as categoryActions from "./action-types";
export const setCurrentCategory = (category) => {
  return {
    type: categoryActions.CHANGE_CURRENT_CATEGORY,
    payload: category,
  };
};

export const getCategoriesSuccess = (categories) => ({
  type: categoryActions.GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategories = () => {
  return async function (dispatch) {
    const categories = await fetchData("GET", "", "categories");
    return dispatch(getCategoriesSuccess(categories));
  };
};
