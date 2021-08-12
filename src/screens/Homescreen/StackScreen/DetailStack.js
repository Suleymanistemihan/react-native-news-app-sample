import React, { Component } from "react";
import { Text, Button, View, Image, ScrollView, TouchableOpacity } from "react-native";

import style from "./style";

class DetailStack extends Component {

  render() {
    const { route: { params: { item } = {} } = {} } = this.props
    const date = new Date(item.publishedAt);
    return (
      <View style={{ flex: 1, backgroundColor: "white", }}>
        <ScrollView style={{ width: "100%" }}>
          <View style={{ width: "95%", alignSelf: "center", alignItems: "center" }}>
            <View style={{ width: "90%", marginVertical: 10, borderRadius: 10, alignSelf: "center" }}>
              {item && <Text style={{ marginVertical: 15, fontWeight: "bold", textAlign: "center", color: "grey" }} >{item.title}</Text>}
            </View>
            <View style={{ backgroundColor: "#e8e8e8", alignItems: "center", height: "100%", }}>
              <View>
                {item && <Image style={{ height: 300, width: 400 }} source={{ uri: item.urlToImage }} />}
              </View>
              <View style={{ alignSelf: "flex-end", marginHorizontal: 15 }}>
                {item && <Text style={{ color: "#2c2d2e" }}>{`Release date: ${date.getDay()}-${date.getMonth()}-${date.getUTCFullYear()}`}</Text>}
              </View>
              <Text style={{ fontWeight: "bold", fontSize: 20, color: "#2c2d2e", alignSelf: "flex-start" }} > Content:</Text>
              <View style={{ marginVertical: 25, marginHorizontal: 7.5 }}>
                {item && <Text style={{ fontSize: 16, color: "#2c2d2e", alignSelf: "flex-start" }} >{item.content}</Text>}
              </View>
              <View style={{ alignSelf: "flex-end", marginVertical: 20, marginHorizontal: 5 }}>
                <Text style={{ color: "#2c2d2e", textAlign: "center" }}>Author</Text>
                {item && <Text style={{ color: "#2c2d2e" }} >{item.author}</Text>}
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-around" }}>
          <Image style={{ width: 25, height: 25 }} source={require("./icons/share.png")} />
          <TouchableOpacity>
            <Image style={{ width: 25, height: 25 }} source={require("./icons/instagram.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ width: 25, height: 25 }} source={require("./icons/twitter.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ width: 25, height: 25 }} source={require("./icons/whatsapp.png")} />
          </TouchableOpacity>
        </View>
      </View >
    )
  }
}
export default DetailStack;