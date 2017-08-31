import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import BusinessReducer from "./business_posts";
import MapsReducer from "./maps_reducer"

const rootReducer = combineReducers({
  shop: BusinessReducer,
  currentLocation: MapsReducer

});

export default rootReducer;
