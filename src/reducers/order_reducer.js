import _ from "lodash";
import {ADD_MENU,REMOVE_MENU } from "../actions";

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
        case REMOVE_MENU:
              console.log('State before deleting')
              console.log(state);

              console.log('Inside Remove Menu!')
              console.log(action.payload);
              return {
   menuList : state.menuList.filter( (item, index) => index !== action.payload)
}
    default:
      return state;
  }
}
