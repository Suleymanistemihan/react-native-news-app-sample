import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, } from "react-native";

import styles from '../style/style';

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
            {this.state.usd && this.state.usd.map((index, item, data, keys, c) => {
              return (
                <View style={styles.currencyCard} key={c}>
                  <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ color: "#2c2d2e", fontSize: 20, }}>{index[0]}</Text>
                  </View>
                  <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ color: "#2c2d2e", fontSize: 20, }}>{index[1]}</Text>
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