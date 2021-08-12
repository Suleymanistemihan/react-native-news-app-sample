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
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.currencyText}>USD</Text>
          <Picker
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ money: itemValue })
            }>
            {
              this.state.usd && this.state.usd.map((item, index) =>
                <Picker.Item label={item[0]} value={item[1].toFixed(2)} key={item} />
              )
            }
          </Picker>
          <View style={styles.moneyContainer}>
            <Text style={styles.moneyText}>{this.state.money}</Text>
          </View>
          <View style={styles.inputMainContainer}>
            <View style={styles.numberContainer}>
              <View style={styles.numberInputContainer}>
                <TextInput
                  style={styles.numberInput}
                  value={String(this.state.number)}
                  placeholder="Enter Price"
                  onChangeText={(number) => this.setState({ number })}
                  keyboardType="numeric"
                >
                </TextInput>
              </View>
            </View>
            <View style={styles.equalContainer}>
              <Text style={{ fontSize: 35 }}>=</Text>
            </View>
            <View style={styles.resultContainer}>
              <View style={styles.resultTextContainer}>
                <Text style={styles.resultText}>
                  {this.state.result}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={this.exchange}
            style={styles.touchableButton}>
            <Text style={{}}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default ConventerScreen;