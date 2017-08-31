import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import BusinessReducer from "./business_posts";
import MapsReducer from "./maps_reducer"
import ShopsReducer from "./shops_reducer"

const rootReducer = combineReducers({
  shop: BusinessReducer,
  currentLocation: MapsReducer,
  googleShop: ShopsReducer
});

export default rootReducer;
