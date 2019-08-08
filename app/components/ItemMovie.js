import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { IMAGE_URL } from "../utils/stringUtils";

const ItemMovieComponent = props => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: IMAGE_URL + item.poster_path }}
        style={styles.imagPath}
      />
      <View
        style={{
          flex: 1,
          borderRadius: 8,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          alignSelf: "flex-end"
        }}
      >
        <Text style={styles.textName}>{item.title}</Text>
      </View>
    </View>
  );
};
export default ItemMovieComponent;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    flexDirection: "row",
    margin: 8
  },
  imagPath: {
    width: 150,
    height: 200,
    borderRadius: 8,
    position: "absolute"
  },
  textName: {
    color: "white",
    fontSize: 14,
    marginLeft: 6
  },
  textJob: {
    color: "white",
    fontSize: 12,
    margin: 6
  }
});
