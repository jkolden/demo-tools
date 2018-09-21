import React, { Component } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import DatePicker from "./DatePicker";
import { Card, Button } from "react-native-elements";
import MyHeader from "../components/MyHeader";
import InstanceSelector from '../components/InstanceSelector'
import BasePicker from '../components/BasePicker'

class BankStatements extends Component {
  render() {
    const { statementsByInstance, selectedInstance } = this.props

    return (
      <View>
      <BasePicker />


        <ScrollView>

            {Object.values(statementsByInstance[selectedInstance].items).map(item => (
              <Card
                key={item.header_id}
                title={item.account_description}
              >
                <Text>{item.currency_code}</Text>
                <Text>{item.instance}</Text>
              </Card>
            ))}
        </ScrollView>
        </View>
    );
  }
}

function mapStateToProps(state) {

  const { statementsByInstance, selectedInstance } = state
  return {
    statementsByInstance,
    selectedInstance
}
}

export default connect(mapStateToProps)(BankStatements);