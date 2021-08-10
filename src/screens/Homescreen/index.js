import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, SafeAreaView, StatusBar, TextInput, } from "react-native";



class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {

    fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ebc09923df8f44aa94337182618c6e28")
      .then((response) => response.json())
      .then((data) => this.setState({ news: data.articles }));
  }
  render() {
    return (

      < SafeAreaView style={{ alignItems: "center", width: "100%" }}>
        <ScrollView style={{ width: "100%" }}>
          <View style={{ height: 320, width: "96%", backgroundColor: "#e8e8e8", alignSelf: "center" }}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            >
              {this.state.news && this.state.news.map((item, index, data) => {

                if (index > 3) return null;
                return (
                  <TouchableOpacity key={item}
                    onPress={() => this.props.navigation.navigate("Detail", { item: item })}
                  >
                    <View style={{ alignItems: "center", justifyContent: "center", width: 395 }}>
                      <Image style={{ width: "100%", height: 250, marginBottom: 5 }} source={{ uri: item.urlToImage }} />
                      <Text style={{ color: "#2c2d2e", fontWeight: "bold", fontSize: 13, textAlign: "center", width: "90%", }}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>

            {this.state.news && this.state.news.map((item, index,) => {
              if (index < 4) return null;
              return (
                <TouchableOpacity key={index}
                  onPress={() => this.props.navigation.navigate("Detail", { item: item })}
                  style={{ height: 135, width: "85%", flexDirection: "row", marginVertical: "3%", }}
                >
                  <View style={{ width: "100%", height: 135, flexDirection: "row", backgroundColor: "#e8e8e8", }}>
                    <Image
                      style={{ width: "50%", height: "100%", }}
                      source={{ uri: item.urlToImage }} />


                    <View style={{ width: "50%", height: 135, }}>

                      <View style={{ height: "50%" }}>
                        <Text style={{ fontSize: 14, color: "#2c2d2e", fontWeight: "bold", marginHorizontal: 10, marginVertical: 10 }}>{item.title}</Text>
                      </View>

                      <View style={{ justifyContent: "flex-end", alignItems: "flex-end", height: "50%" }}>
                        <Text style={{ color: "#2c2d2e", fontWeight: "bold", marginHorizontal: 5, }}>{item.publishedAt}</Text>
                      </View>

                    </View>
                  </View>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
      </SafeAreaView >
    )
  }
}

export default HomeScreen;