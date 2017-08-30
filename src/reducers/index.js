import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import BusinessReducer from "./business_posts";

const rootReducer = combineReducers({
  shop: BusinessReducer
  
});

export default rootReducer;
