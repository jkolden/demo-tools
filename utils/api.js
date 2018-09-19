import { AsyncStorage } from 'react-native'

const KEY = 'DEMO_TOOLS'


export function saveInstance ( instance, password ) {
  return AsyncStorage.mergeItem(KEY, JSON.stringify({
    [instance]: {
      'instance': instance,
      'password': password
    }
  }))
}

function formatResults(results) {
    return JSON.parse(results)
}

export function getInstances () {
  return AsyncStorage.getItem(KEY)
  .then(formatResults)
}