import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { saveInstance } from '../utils/api'
import { connect } from 'react-redux'
import { addInstance, selectInstance } from '../actions'

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
    .then(this.props.dispatch(selectInstance(this.state.text)))

    // Clear input
    this.setState({ text: "" });
  };

  render() {
    return (
      <View style={styles.container}>
       <TextInput
            style={{ height: 40, fontSize: 20 }}
            placeholder="Enter Instance"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            autoCapitalize = 'none'
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect()(AddEntry)
