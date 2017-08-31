import _ from "lodash";
import {ADD_PLACE} from "../actions";

export default function(state = null, action) {

  switch (action.type) {
      case ADD_PLACE:
        return action.payload;

    default:
      return state;
  }
}
