export const RECEIVE_INSTANCES = 'RECEIVE_INSTANCES'
export const ADD_INSTANCE = 'ADD_INSTANCE'
export const SELECT_INSTANCE = 'SELECT_INSTANCE'
export const INVALIDATE_INSTANCE = 'INVALIDATE_INSTANCE'
export const REQUEST_STATEMENTS = 'REQUEST_STATEMENTS'
export const RECEIVE_STATEMENTS = 'RECEIVE_STATEMENTS'
import fetch from 'cross-fetch'


 export function receiveInstances (instances) {
  return {
    type: RECEIVE_INSTANCES,
    instances,
  }
}

 export function addInstance (instance) {
  return {
    type: ADD_INSTANCE,
    instance,
  }
}

export function selectInstance(instance) {
  return {
    type: SELECT_INSTANCE,
    instance
  }
}

export function invalidateInstance(instance) {
  return {
    type: INVALIDATE_INSTANCE,
    instance
  }
}


export function requestStatements(instance) {
  return {
    type: REQUEST_STATEMENTS,
    instance
  }
}

export function receiveStatements(instance, json) {
  return {
    type: RECEIVE_STATEMENTS,
    instance,
    statements: json.items
  }
}

export function fetchStatements(instance) {
  const url = 'https://apex.oracle.com/pls/apex/myfusion/load/statements/'

  return dispatch => {
    dispatch(requestStatements(instance))
    return fetch(url,
      { headers: {
            "Content-Type": "application/json",
            "instance": instance
        }
  }
      )
      .then(response => response.json())
      .then(json => dispatch(receiveStatements(instance, json)))
  }
}


