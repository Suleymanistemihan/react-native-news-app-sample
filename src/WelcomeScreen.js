import React, { Component } from 'react';
import { Image, View, ImageBackground } from 'react-native';

const backG = require("./image/splash.png");

export default class Welcome extends Component {
  constructor(props) {
    super(props)
    setTimeout(() => {
      this.props.navigation.navigate("Home");

    }, 50);
  }
  render() {
    return (
      <ImageBackground style={{ width: "106%", height: "100%" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image source={backG} style={{ height: "100%", width: "100%" }}></Image>
        </View>

      </ImageBackground>
    )
  }
}
