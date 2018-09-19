import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { saveInstance } from '../utils/api'
import { connect } from 'react-redux'
import { addInstance } from '../actions'

class AddEntry extends Component {

  state = {
    text: ""
  }

  submit = () => {
    const payload = {
      [this.state.text]: {
        instance: this.state.text,
        password: 'vsT7u8'
      }
    }

    saveInstance(this.state.text, 'vsT7u8')
    .then(this.props.dispatch(addInstance(payload)))

    // Clear input
    this.setState({ text: "" });
  };

  render() {
    return (
      <View>
       <TextInput
            style={{ height: 40, fontSize: 20 }}
            placeholder="Enter Instance"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />

          <Button
            backgroundColor="#4696ec"
            style={{ marginTop: 30 }}
            onPress={() => {
              this.submit();
            }}
            title="Submit"
            disabled={!this.state.text}
          />
      </View>


      )
  }

}

export default connect()(AddEntry)
