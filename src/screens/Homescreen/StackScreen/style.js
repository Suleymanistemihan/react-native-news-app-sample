import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: "100%"
  },
  scCont: {
    width: "100%"
  },
  detailCont: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#e8e8e8",
  },
  titleCont: {
    width: "70%",
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  titleText: {
    marginVertical: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "grey"
  },
  detailCard: {
    alignItems: "center",
    height: "50%",
  },
  detailImage: {
    height: 300,
    width: 400
  },
  detailDateCont: {
    alignSelf: "flex-end",
    marginHorizontal: 15,
    width: "100%",
    alignItems: "flex-end"
  },
  detailDate: {
    color: "#2c2d2e",

  },
  detailContentHead: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#2c2d2e",
    alignSelf: "flex-start"
  },
  detailContentCont: {
    marginVertical: 25,
    marginHorizontal: 7.5
  },
  detailContentText: {
    fontSize: 16,
    color: "#2c2d2e",
    alignSelf: "flex-start"
  },
  detailAuthorCont: {
    alignSelf: "flex-end",
    marginVertical: 20,
    marginHorizontal: 5
  },
  detailAuthorHead: {
    color: "#2c2d2e",
    textAlign: "center"
  },
  detailAuthorText: {
    color: "#2c2d2e"
  },
  detailShareCont: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: "white"
  },
  detailShareIcon: {
    width: 25,
    height: 25
  },
})

export default styles;