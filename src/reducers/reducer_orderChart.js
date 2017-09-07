import _ from "lodash";
import {ORDER_CHARTDATA } from "../actions";

export default function(state=null, action) {

  switch (action.type) {
      case ORDER_CHARTDATA:
        
          return action.payload
    default:
      return state;
  }
}
