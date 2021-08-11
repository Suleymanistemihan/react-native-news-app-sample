import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Image, TextInput, Text } from "react-native";
import styles from './style/style';

import { Picker } from '@react-native-picker/picker';



class ConventerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: " ",
      number: " "
    }
    change = () => {
      return (
        result * number
      )
    }
  }
  componentDidMount() {
    fetch("https://api.exchangerate.host/latest?base=USD")
      .then(response => response.json())
      .then((data) => this.setState({ usd: Object.entries(data.rates) }));
  }
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
        <View style={{ width: "85%", height: "50%", backgroundColor: "#e8e8e8", alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
          <Text style={{ fontSize: 35, height: 40 }}>USD</Text>
          <Picker
            style={{ width: 150, height: 35, marginVertical: 10 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ result: itemValue })
            }>
            {
              this.state.usd && this.state.usd.map((item, key) =>
                <Picker.Item label={item[0]} value={item[1]} key={key} />
              )
            }
          </Picker>
          <View style={{ flexDirection: "row" }}>
            <View style={{ alignItems: "center" }}>
              <View style={{ width: 153, height: 35, backgroundColor: "white", borderWidth: 2, borderColor: "black" }}>
                <TextInput
                  style={{ width: 153, height: 35 }}
                  placeholder="1"
                  keyboardType="numeric">
                  {this.state.number}
                </TextInput>
              </View>
            </View>
            <View style={{ height: 35, justifyContent: "center", alignItems: "center", width: 35 }}>
              <Text style={{ fontSize: 35 }}>=</Text>
            </View>
            <View style={{ justifyContent: "center", backgroundColor: "#e8e8e8", alignItems: "center", height: 35, width: 150 }}>
              <View style={{ width: 150, height: 35, backgroundColor: "white", borderWidth: 2, borderColor: "black", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {this.change()}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
export default ConventerScreen;