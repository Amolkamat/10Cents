import _ from "lodash";
import {FETCH_BUSINESS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {

      case FETCH_BUSINESS:      
        return action.payload;
    default:
      return state;
  }
}
