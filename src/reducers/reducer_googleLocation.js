import _ from "lodash";
import {GOOGLE_LOCATION } from "../actions";

export default function(state=null, action) {

  switch (action.type) {
      case GOOGLE_LOCATION:

          return action.payload
    default:
      return state;
  }
}
