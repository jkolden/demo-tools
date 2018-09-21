import React, { Component } from "react"
import { connect } from 'react-redux'
import { View, Text, ScrollView, Picker, Button, TouchableOpacity } from "react-native"
import { Card } from "react-native-elements"
import { getInstances } from "../utils/api"
import { fetchStatements, receiveInstances, selectInstance } from "../actions"

class InstanceSelector extends Component {
  state = {
    language: ""
  }

  handleChange (itemValue) {
    this.props.dispatch(selectInstance(itemValue))
    this.props.dispatch(fetchStatements(itemValue))
  }

  render() {

    return (
        <Picker
          selectedValue={this.props.selectedInstance}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            this.handleChange(itemValue)
          }
        >
          {Object.keys(this.props.instances).map(item => (
            <Picker.Item label={item} value={item} key={item} />
          ))}
        </Picker>
    );
  }

}

function mapStateToProps(state) {
    return state
  }


export default connect(mapStateToProps)(InstanceSelector);