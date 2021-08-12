import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, SafeAreaView, StatusBar, TextInput, } from "react-native";

import styles from "./style"

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

      < SafeAreaView style={styles.mainCont}>
        <ScrollView style={styles.scMain}>
          <View style={styles.sliderCont}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}>
              {this.state.news && this.state.news.map((item, index, data) => {
                if (index > 3) return null;
                return (
                  <TouchableOpacity key={index}
                    onPress={() => this.props.navigation.navigate("Detail", { item: item })}>
                    <View style={styles.sliderView}>
                      <Image style={styles.sliderImage} source={{ uri: item.urlToImage }} />
                      <Text style={styles.sliderText}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
          <View style={styles.previousCont}>
            {this.state.news && this.state.news.map((index, item) => {
              const date = new Date(index.publishedAt);
              if (index < 4) return null;
              return (
                <TouchableOpacity key={item}
                  onPress={() => this.props.navigation.navigate("Detail", { item: index })}
                  style={styles.previousTouch}>
                  <View style={styles.previousImageCont}>
                    <Image
                      style={styles.previousImage}
                      source={{ uri: index.urlToImage }} />
                    <View style={styles.previousDetailCont}>
                      <View style={styles.previousTitleCont}>
                        <Text style={styles.previousTitle}>{index.title}</Text>
                      </View>
                      <View style={styles.previousDateCont}>
                        <Text style={styles.previousDate}>{`Release date: ${date.getDay()}-${date.getMonth()}-${date.getUTCFullYear()}`}</Text>
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