import _ from "lodash";
import {POST_MENU } from "../actions";

export default function(state=null, action) {
  console.log('Menu reducer')
  switch (action.type) {
      case POST_MENU:
          console.log('POST_MENU REDUCER');
          console.log(action);
          return action.payload
    default:
      return state;
  }
}
