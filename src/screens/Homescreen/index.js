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
            <Text style={styles.Header}>New Incoming News</Text>
            <ScrollView
              style={styles.scSlider}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {this.state.news && this.state.news.map((item, index, data) => {
                if (index > 4) return null;
                return (
                  <View key={index} style={{}}>
                    <TouchableOpacity
                      style={styles.sliderTouch}
                      onPress={() => this.props.navigation.navigate("Detail", { item: item })}>
                      <Image style={styles.sliderImage} source={{ uri: item.urlToImage }} />
                      <Text style={styles.sliderText}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
              })}
            </ScrollView>
          </View>
          <View style={styles.previousCont}>
            <Text style={styles.Header}>Previous News</Text>
            {this.state.news && this.state.news.map((index, item) => {
              const date = new Date(index.publishedAt);
              if (item < 5) return null;
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