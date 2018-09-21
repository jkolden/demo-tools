import React, { Component } from "react";
import { Header } from "react-native-elements";

class MyHeader extends Component {
  render() {
    return (
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Section One Demo Tools", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
    );
  }
}

export default MyHeader