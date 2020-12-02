import { combineReducers } from "redux";
import customizer from "./customizer/";
import auth from "./auth/";
import navbar from "./navbar/Index";

import products from "./product";

const rootReducer = combineReducers({
  customizer: customizer,
  auth: auth,
  navbar: navbar,
  products,
});

export default rootReducer;
