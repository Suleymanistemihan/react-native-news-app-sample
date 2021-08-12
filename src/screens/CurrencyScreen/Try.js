import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, } from "react-native";

import styles from './style';

class TopTabTry extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    fetch("https://api.exchangerate.host/latest?base=TRY")
      .then(response => response.json())
      .then((data) => this.setState({ try: Object.entries(data.rates) }));
  }

  render() {
    return (
      <View style={styles.moneyCont}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.currencyContainer}>
            {this.state.try && this.state.try.map((index, item, data, keys, b) => {
              return (
                <View style={styles.currencyCard} key={b} >
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

export default TopTabTry;