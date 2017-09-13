import {MANUAL_LOGIN, SET_CURRENT_USER,LOGOUT_USER } from "../actions";

export default function(state=null, action) {

  switch (action.type) {
      case MANUAL_LOGIN:
          return action
      case SET_CURRENT_USER:
            console.log('SET CURRENT USER REDUCER');
              console.log(action);
              return action
        case LOGOUT_USER:
            console.log('LOGGED OUT FROM REDUCER!')
                return action
    default:
      return state;
  }
}
