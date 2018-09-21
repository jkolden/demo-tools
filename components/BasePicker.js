import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";
import { connect } from 'react-redux'
import { getInstances } from "../utils/api"
import { fetchStatements, receiveInstances, selectInstance } from "../actions"



class BasePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value: string) {
    this.props.dispatch(selectInstance(value))
    this.props.dispatch(fetchStatements(value))
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Select your Instance"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.props.selectedInstance}
              onValueChange={this.onValueChange.bind(this)}
            >
              {Object.keys(this.props.instances).map(item => (
            <Picker.Item label={item} value={item} key={item} />
          ))}
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
    return state
  }


export default connect(mapStateToProps)(BasePicker);