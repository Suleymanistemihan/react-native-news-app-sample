import React, { Component, useCallback } from 'react';
import { View, ScrollView, TouchableOpacity, Image, TextInput, Text } from "react-native";

import styles from "./style"

import { Picker } from '@react-native-picker/picker';



class ConventerScreen extends Component {



  constructor(props) {

    super(props);
    this.state = {
      number: "",
      money: "",
      result: "",

    }

  }
  exchange = () => {
    const calculate = this.state.number * this.state.money
    this.setState({ result: calculate.toFixed(2) })
  }
  componentDidMount() {
    fetch("https://api.exchangerate.host/latest?base=USD")
      .then(response => response.json())
      .then((data) => this.setState({ usd: Object.entries(data.rates) }));
  }

  render() {

    return (
      <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
        <View style={{ width: "85%", height: 400, backgroundColor: "#e8e8e8", alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
          <Text style={{ fontSize: 35, height: 40 }}>USD</Text>
          <Picker
            style={{ width: 150, height: 35, marginTop: 15, }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ money: itemValue })
            }>
            {
              this.state.usd && this.state.usd.map((item, key) =>
                <Picker.Item label={item[0]} value={item[1].toFixed(2)} key={key} />
              )
            }
          </Picker>
          <View style={{ backgroundColor: "#1DA1F2", marginVertical: 10, width: 60, height: 30, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "grey", borderRadius: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>{this.state.money}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ alignItems: "center" }}>
              <View style={{ width: 133, height: 35, backgroundColor: "white", borderWidth: 2, borderColor: "black", borderRadius: 10, justifyContent: "center", }}>
                <TextInput
                  style={{height: 35, fontSize: 15, fontWeight: "bold", marginHorizontal: 10 }}
                  value={String(this.state.number)}
                  placeholder="Enter Price"
                  onChangeText={(number) => this.setState({ number })}
                  keyboardType="numeric"
                >
                </TextInput>
              </View>
            </View>
            <View style={{ height: 35, justifyContent: "center", alignItems: "center", width: 35 }}>
              <Text style={{ fontSize: 35 }}>=</Text>
            </View>
            <View style={{ justifyContent: "center", backgroundColor: "#e8e8e8", alignItems: "center", height: 35, width: 130, }}>
              <View style={{ width: 130, height: 35, backgroundColor: "white", borderWidth: 2, borderColor: "black", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {this.state.result}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={this.exchange}
            style={{ backgroundColor: "#1DA1F2", borderWidth: 1, borderRadius: 10, width: 75, height: 35, borderColor: "grey", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default ConventerScreen;