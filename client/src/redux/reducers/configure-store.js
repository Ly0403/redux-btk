import { createStore , applyMiddleware} from "redux"
import rootReducer from "./index";
import {thunk}  from "redux-thunk"

export const configureStorage = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
