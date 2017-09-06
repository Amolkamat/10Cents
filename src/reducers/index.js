import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import BusinessReducer from "./business_posts";
import MapsReducer from "./maps_reducer"
import ShopsReducer from "./shops_reducer"
import MenuItemReducer from "./reducer_menuItems"
import OrderReducer from "./order_reducer"
import BusinessSetupReducer from "./reducer_BusinessSetup"
import PostMenuReducer from "./reducer_postMenu"
import NotificaitonReducer from "./reducer_notification"

const rootReducer = combineReducers({
  shop: BusinessReducer,
  currentLocation: MapsReducer,
  googleShop: ShopsReducer,
  menu: MenuItemReducer,
  order: OrderReducer,
  business: BusinessSetupReducer,
  postedMenu: PostMenuReducer,
  notification: NotificaitonReducer

});

export default rootReducer;
