import _ from "lodash";
import {ADD_PLACE } from "../actions";

export default function(state = null, action) {
  console.log('Add Place');
  console.log(action.payload)
  switch (action.type) {
      case ADD_PLACE:
        return action.payload;
    default:
      return state;
  }
}
