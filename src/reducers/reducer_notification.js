import _ from "lodash";
import {DISPLAY_NOTIFICATION } from "../actions";

export default function(state=null, action) {

  switch (action.type) {
      case DISPLAY_NOTIFICATION:
          console.log('Notification Reducer'  + action.payload)
          return action.payload
    default:
      return state;
  }
}
