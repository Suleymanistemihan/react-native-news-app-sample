import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  mainCont: {
    alignItems: "center",
    width: "100%"
  },
  scMain: {
    width: "100%"
  },
  sliderCont: {
    height: 320,
    width: "96%",
    backgroundColor: "#e8e8e8",
    alignSelf: "center"
  },
  sliderView: {
    alignItems: "center",
    justifyContent: "center",
    width: 395
  },
  sliderImage: {
    width: "100%",
    height: 250,
    marginBottom: 5
  },
  sliderText: {
    color: "#2c2d2e",
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "center",
    width: "90%",
  },
  previousCont: {
    width: "100%",
    alignItems: "center"
  },
  previousTouch: {
    height: 135,
    width: "85%",
    flexDirection: "row",
    marginVertical: "3%"
  },
  previousImageCont: {
    width: "100%",
    height: 135,
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
  },
  previousImage: {
    width: "50%",
    height: "100%",
  },
  previousDetailCont: {
    width: "50%",
    height: 135,
  },
  previousTitleCont: {
    height: "50%"
  },
  previousTitle: {
    fontSize: 14,
    color: "#2c2d2e",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 10
  },
  previousDateCont: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: "50%"
  },
  previousDate: {
    color: "#2c2d2e",
    fontWeight: "bold",
    marginHorizontal: 5,
  }
})

export default styles;