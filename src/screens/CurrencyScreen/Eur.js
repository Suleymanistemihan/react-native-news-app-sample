import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, } from "react-native";

import styles from './style';


class TopTabEur extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    fetch("https://api.exchangerate.host/latest?base=EUR")
      .then(response => response.json())
      .then((data) => this.setState({ eur: Object.entries(data.rates) }));
  }

  render() {
    return (
      <View style={styles.moneyCont}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.currencyContainer}>
            {this.state.eur && this.state.eur.map((item, index) => {
              return (
                <View style={styles.currencyCard} key={index}>
                  <View style={styles.moneyTextCont}>
                    <Text style={styles.moneyText}>{item[0]}</Text>
                  </View>
                  <View style={styles.moneyTextCont}>
                    <Text style={styles.moneyText}>{item[1]}</Text>
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

export default TopTabEur;