import { combineReducers } from "redux";
import { changeCategoryReducer } from "./category-reducers";
import getCategoriesReducer from "./get-categories-reducer";
import getProductsReducer from "./get-products-reducer";
import cartItemReducer from "./cart-item-reducers";

const rootReducers = combineReducers({
  changeCategoryReducer,
  getCategoriesReducer,
  getProductsReducer,
  cartItemReducer,
});


export default rootReducers;