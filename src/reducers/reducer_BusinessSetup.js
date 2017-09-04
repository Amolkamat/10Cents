import {GET_BUSINESS} from "../actions";

export default function(state=null, action) {
  switch (action.type) {
      case GET_BUSINESS:
        console.log('From GET_BUSINESS');
        console.log(action.payload);
        return action.payload;
    default:
      return state;
  }
}
