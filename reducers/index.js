import {
  RECEIVE_INSTANCES,
  ADD_INSTANCE,
  REQUEST_STATEMENTS,
  RECEIVE_STATEMENTS
   } from '../actions'


 function instances (state = {}, action) {
  switch (action.type) {

    case RECEIVE_INSTANCES :
      return {
        ...state,
        ...action.instances,
      }
    case ADD_INSTANCE :
      return {
        ...state,
        ...action.instance
      }
    default :
      return state
  }
}


 export default instances