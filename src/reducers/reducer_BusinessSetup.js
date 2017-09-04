import {GET_BUSINESS} from "../actions";

export default function(state, action) {
  switch (action.type) {

      case GET_BUSINESS:
        return action.payload;
    default:
      return state;
  }
}
