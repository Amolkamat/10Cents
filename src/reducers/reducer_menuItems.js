import _ from "lodash";
import {GET_MENU } from "../actions";

export default function(state = {}, action) {
  console.log('Menu reducer')
  switch (action.type) {
      case GET_MENU:
          console.log('GET MENU PAYLOAD');
          console.log(action.payload);
          return action.payload
    default:
      return state;
  }
}
