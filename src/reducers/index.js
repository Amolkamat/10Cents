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
import FetchOrdersReducer from "./reducer_fetchOrders"
import UploadedMenuReducer from "./reducer_uploadedMenu"
import LoginReducer from "./reducer_login"

import GoogleLocationReducer from "./reducer_googleLocation"
const rootReducer = combineReducers({
  shop: BusinessReducer,
  currentLocation: MapsReducer,
  googleShop: ShopsReducer,
  menu: MenuItemReducer,
  order: OrderReducer,
  business: BusinessSetupReducer,
  postedMenu: PostMenuReducer,
  notification: NotificaitonReducer,
  businessOrders:FetchOrdersReducer,
  uploadedMenu: UploadedMenuReducer,
  userAuthentication: LoginReducer,
  googleLocation: GoogleLocationReducer

});

export default rootReducer;
