import _ from "lodash";
import {FETCH_RESTAURANTS} from "../actions";

export default function(state = {}, action) {
  console.log('Shops reducer')
  switch (action.type) {
      case FETCH_RESTAURANTS:
        return action.payload    
    default:
      return state;
  }
}
