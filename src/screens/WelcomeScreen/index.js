import React, { Component } from 'react';
import { Image, View, ImageBackground } from 'react-native';
const backG = require("./image/splash.png");

import styles from './style';
export default class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    setTimeout(() => {
      this.props.navigation.replace("Home");

    }, 3000);
  }
  render() {
    return (
      <ImageBackground style={styles.imgBg}>
        <View style={styles.imageContainer}>
          <Image source={backG} style={styles.image}></Image>
        </View>

      </ImageBackground>
    )
  }
}
