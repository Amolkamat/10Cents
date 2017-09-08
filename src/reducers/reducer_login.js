import {MANUAL_LOGIN } from "../actions";

export default function(state=null, action) {

  switch (action.type) {
      case MANUAL_LOGIN:          
          return action
    default:
      return state;
  }
}
