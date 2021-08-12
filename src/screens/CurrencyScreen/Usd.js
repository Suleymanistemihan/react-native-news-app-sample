import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, } from "react-native";

import styles from './style';

class TopTabUsd extends Component {
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
      <View style={styles.moneyCont}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.currencyContainer}>
            {this.state.usd && this.state.usd.map((data, key) => {
              return (
                <View style={styles.currencyCard} key={key}>
                  <View style={styles.moneyTextCont}>
                    <Text style={styles.moneyText}>{data[0]}</Text>
                  </View>
                  <View style={styles.moneyTextCont}>
                    <Text style={styles.moneyText}>{data[1]}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default TopTabUsd;