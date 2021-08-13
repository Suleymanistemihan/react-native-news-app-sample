import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  scMain: {
    width: "100%"
  },
  sliderCont: {
    width: "100%",
    height: 300,
    alignItems: "center",

  },
  Header: {
    marginVertical: 15,
    fontWeight: "bold",
    fontSize: 16,
    color: "#2c2d2e",
  },
  scSlider: {
    width: "100%"
  },
  sliderTouch: {
    backgroundColor: "#e8e8e8",
    width: 200,
    height: 250,
    marginHorizontal: 10,
    alignItems: "center",
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#bfbfbf"

  },
  sliderImage: {
    width: "100%",
    height: 130,
    marginBottom: 5,
  },
  sliderText: {
    color: "#2c2d2e",
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "center",
    width: "90%",
    marginTop: 20
  },
  previousCont: {
    width: "100%",
    alignItems: "center"
  },
  previousTouch: {
    height: 135,
    width: "95%",
    flexDirection: "row",
    marginVertical: "3%",
    borderRadius: 5,
    borderRightWidth: 5,
    borderColor: "#bfbfbf",
    backgroundColor: "#e8e8e8",
  },
  previousImageCont: {
    width: "100%",
    height: 135,
    flexDirection: "row",

  },
  previousImage: {
    width: "50%",
    height: "100%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
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