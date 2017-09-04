import _ from "lodash";
import {POST_MENU } from "../actions";

export default function(state =null, action) {
  console.log('Menu reducer')
  switch (action.type) {
      case POST_MENU:
          
          return action.payload
    default:
      return state;
  }
}
