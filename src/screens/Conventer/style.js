import React from "react"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  container: {
    width: "85%", height: 400,
    backgroundColor: "#e8e8e8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  currencyText: {
    fontSize: 35,
    height: 40,
  },
  picker: {
    width: 150,
    height: 35,
    marginTop: 15,
  },
  moneyContainer: {
    backgroundColor: "#1DA1F2",
    marginVertical: 10,
    width: 60,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10
  },
  moneyText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white"
  },
  inputMainContainer: {
    flexDirection: "row",

  },
  numberContainer: {
    alignItems: "center"
  },
  numberInputContainer: {
    width: 100,
    height: 35,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    justifyContent: "center",
  },
  numberInput: {
    height: 35,
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  equalContainer: {
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: 35
  },
  resultContainer: {
    justifyContent: "center",
    backgroundColor: "#e8e8e8",
    alignItems: "center",
    height: 35,
    width: 100,
  },
  resultTextContainer: {
    width: 100,
    height: 35,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  resultText: {
    fontSize: 15,
    fontWeight: "bold"
  },
  touchableButton: {
    backgroundColor: "#1DA1F2",
    borderWidth: 1,
    borderRadius: 10,
    width: 75,
    height: 35,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  touchableText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  }
})