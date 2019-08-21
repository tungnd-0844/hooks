import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageBackground: {
    height: 250,
    width: "100%"
  },
  image: {
    borderRadius: 75,
    height: 150,
    width: 150,
    borderColor: "white",
    borderWidth: 2
  },
  container: {
    marginTop: 180,
    flexDirection: "row",
    marginLeft: 16
  },
  containerDescription: {
    flex: 1,
    justifyContent: "space-around"
  }
});

export default styles;
