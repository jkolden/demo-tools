export const RECEIVE_INSTANCES = 'RECEIVE_INSTANCES'
export const ADD_INSTANCE = 'ADD_INSTANCE'
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


