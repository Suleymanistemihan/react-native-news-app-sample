import React, { Component } from "react";
import { Text, Button, View, Image, ScrollView, TouchableOpacity } from "react-native";

import styles from "./style";

class DetailStack extends Component {

  render() {
    const { route: { params: { item } = {} } = {} } = this.props
    const date = new Date(item.publishedAt);
    return (
      <View style={styles.mainCont}>
        <View style={styles.detailCont}>
          <ScrollView style={styles.scCont}>
            <View style={styles.titleCont}>
              {item && <Text style={styles.titleText} >{item.title}</Text>}
            </View>
            <View style={styles.detailCard}>
              <View>
                {item && <Image style={styles.detailImage}
                  source={{ uri: item.urlToImage }} />}
              </View>
              <View style={styles.detailDateCont}>
                {item && <Text style={styles.detailDate}>{`Release date: ${date.getDay()}-${date.getMonth()}-${date.getUTCFullYear()}`}</Text>}
              </View>
              <Text style={styles.detailContentHead} > Content:</Text>
              <View style={styles.detailContentCont}>
                {item && <Text style={styles.detailContentText} >{item.content}</Text>}
              </View>
              <View style={styles.detailAuthorCont}>
                <Text style={styles.detailAuthorHead}>Author</Text>
                {item && <Text style={styles.detailAuthorText} >{item.author}</Text>}
              </View>
            </View>
          </ScrollView>
          <View style={styles.detailShareCont}>
            <Image style={styles.detailShareIcon} source={require("./icons/share.png")} />
            <TouchableOpacity>
              <Image style={styles.detailShareIcon} source={require("./icons/instagram.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.detailShareIcon} source={require("./icons/twitter.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.detailShareIcon} source={require("./icons/whatsapp.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View >
    )
  }
}
export default DetailStack;