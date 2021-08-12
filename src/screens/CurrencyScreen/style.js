import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  moneyCont: {
    backgroundColor: "white",
    width: "100%"
  },
  currencyContainer: {
    width: "90%",
    alignSelf: "center",
  },
  currencyCard: {
    marginVertical: 5,
    height: 40,
    backgroundColor: "#e8e8e8",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    width: 100,
    height: 50,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2
  },
  selectInput: {
    width: 100,
    height: 50
  }
})

export default styles;