import fetchData from "../../components/common/fetchData";
import * as actions from "./action-types";

export const getProductsSuccess = (products) => ({
  type: actions.GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProducts = (category) => {
  return async function (dispatch) {
    let url = "products";
    if (category) {
      url += "?categoryId=" + category.id;
    }
    let products = await fetchData("GET", "", url);
    return dispatch(getProductsSuccess(products));
  };
};

export const saveProductSuccess = (product) => ({
  type: actions.SAVE_PRODUCT,
  payload: product,
});

export const saveProduct = (product) => {
  return async function (dispatch) {
    const products = await fetchData("POST", product, "products");
    return dispatch(saveProductSuccess(products));
  };
};

export const updateProductSuccess = (product) => ({
  type: actions.UPDATE_PRODUCT,
  payload: product,
});

export const updateProduct = (product) => {
  return async function (dispatch) {
    const products = await fetchData("POST", product, "products/"+product.id);
    return dispatch(saveProductSuccess(products));
  };
};
