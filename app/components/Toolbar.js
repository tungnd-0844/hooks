import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Toolbar = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>Movies</Text>
      <MaterialIcon name="search" size={30} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    elevation: 4,
    width: "100%",
    backgroundColor: "#FFF",
    padding: 8,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  titleHeader: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Cochin"
  }
});

export default Toolbar;
