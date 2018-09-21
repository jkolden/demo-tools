import { combineReducers } from 'redux'
import {
  RECEIVE_INSTANCES,
  ADD_INSTANCE,
  REQUEST_STATEMENTS,
  RECEIVE_STATEMENTS,
  SELECT_INSTANCE,
  INVALIDATE_INSTANCE
   } from '../actions'


function selectedInstance(state = {}, action) {
  switch (action.type) {
    case SELECT_INSTANCE:
      return action.instance
    default:
      return state
  }
}

function statements (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_INSTANCE:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_STATEMENTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_STATEMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.statements,
      })
    default:
      return state
}
}

function statementsByInstance(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_INSTANCE:
    case RECEIVE_STATEMENTS:
    case REQUEST_STATEMENTS:
      return Object.assign({}, state, {
        [action.instance]: statements(state[action.instance], action)
      })
    default:
      return state
  }
}

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

const rootReducer = combineReducers({
  selectedInstance,
  statementsByInstance,
  instances
})

 export default rootReducer