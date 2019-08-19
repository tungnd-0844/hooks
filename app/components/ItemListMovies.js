import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ItemListMovie = props => {
  const { item } = props;
  const IMAGE_URL = "http://image.tmdb.org/t/p/w300";
  return (
    <View style={styles.flatview}>
      <Image
        style={styles.imageItemMovie}
        source={{ uri: IMAGE_URL + item.backdrop_path }}
      />
      <View style={styles.containerView}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.name}>{item.release_date}</Text>
      </View>
    </View>
  );
};

export default ItemListMovie;

const styles = StyleSheet.create({
  flatview: {
    flex: 1,
    flexDirection: "row"
  },
  imageItemMovie: {
    flex: 3,
    marginTop: 8,
    marginLeft: 8,
    width: 100,
    height: 80
  },
  containerView: {
    flex: 7,
    justifyContent: "center"
  },
  name: {
    marginLeft: 8,
    marginTop: 8
  }
});
