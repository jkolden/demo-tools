import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import DatePicker from './DatePicker'
import { Card, Button } from "react-native-elements"


class BankStatements extends Component {

  render () {

    return (
      <View>
      <Card title='Statement Date'>
      <DatePicker />
      </Card>
      <Text>Bank Statements</Text>

      </View>

      )
  }

}

export default connect()(BankStatements)