import {UPLOADED_MENU} from "../actions";

export default function(state=null, action) {
  switch (action.type) {
      case UPLOADED_MENU:
        return action.payload;
    default:
      return state;
  }
}
