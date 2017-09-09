import {CREATE_BUSINESS} from "../actions";

export default function(state=null, action) {
  switch (action.type) {
      case CREATE_BUSINESS:
        console.log('From CREATE_BUSINESS');
        console.log(action);
        return action.payload;
    default:
      return state;
  }
}
