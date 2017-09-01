import _ from "lodash";
import {ADD_MENU } from "../actions";

const initialUserState = {
    menuList:[]
}

export default function(state = initialUserState, action) {
  console.log('Add Menu Item to Order')
  switch (action.type) {
      case ADD_MENU:
          return {
            ...state,
             menuList:[...state.menuList, action.payload]
          }
    default:
      return state;
  }
}
