import _ from "lodash";
import {GET_MENU } from "../actions";

export default function(state = {}, action) {
  console.log('Menu reducer')
  switch (action.type) {
      case GET_MENU:
          return action.payload
    default:
      return state;
  }
}
