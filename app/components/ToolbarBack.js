import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";

const ToolbarBack = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.goBack()}>
        <MaterialIcon
          name="arrow-back"
          size={25}
          color="black"
          style={{ marginTop: 4 }}
        />
      </TouchableOpacity>

      <Text style={styles.titleHeader}>{props.title.toUpperCase()}</Text>
    </View>
  );
};

ToolbarBack.propTypes = {
  goBack: PropTypes.func.isRequired
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
    flexDirection: "row"
  },
  titleHeader: {
    fontSize: 22,
    marginLeft: 24,
    fontWeight: "bold",
    fontFamily: "Cochin"
  }
});

export default ToolbarBack;
