import React, { Component, useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, TextInput, TouchableHighlight, Modal, } from "react-native";
import styles from './style/style';




class ConventerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    fetch("https://api.exchangerate.host/latest?base=USD")
      .then(response => response.json())
      .then((data) => this.setState({ usd: Object.entries(data.rates) }));
  }
  render() {

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ height: 600, width: 350, backgroundColor: "#e8e8e8", borderRadius: 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>

          <View>
            <TextInput style={{ height: 35, width: 100, borderColor: "black", borderWidth: 1, backgroundColor: "white", textAlign: "center" }}
              placeholder="Value"
              keyboardType="numeric"
            >
            </TextInput>
          </View>
          <View>
            <TextInput style={{ height: 35, width: 100, borderColor: "black", borderWidth: 1, backgroundColor: "white" }}></TextInput>
          </View>
        </View>
      </View>
    )
  }
}
export default ConventerScreen;