import React, { Component } from "react"
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  AsyncStorage,
  Header
} from "react-native"
import { Card, Button } from "react-native-elements"
import { saveInstance, getInstances } from "../utils/api"
import { receiveInstances } from '../actions'
import { connect } from 'react-redux'

class Credentials extends Component {

  state = {
    ready: false,
  }

  componentDidMount () {
    const { dispatch } = this.props

    getInstances()
      .then((instances) => dispatch(receiveInstances(instances)))
  }

  render() {

    return (
      <ScrollView>
      {Object.keys(this.props.instances).map(key => (

        <TouchableOpacity key={key}>
                <Card>
        <Text>{key}</Text>
        </Card>
        </TouchableOpacity>



        ))}

      <Text>Currently Selected Instance: {JSON.stringify(this.props.selectedInstance)}</Text>
      </ScrollView>
      )
  }
}


function mapStateToProps(state) {
  return state

}


export default connect(mapStateToProps)(Credentials)