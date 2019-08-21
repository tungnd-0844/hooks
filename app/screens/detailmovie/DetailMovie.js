import React, { useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { IMAGE_URL } from "../../utils/stringUtils";
import styles from "./styles";

export default function DetailMovie(props) {
  const { navigation } = props;
  const item = navigation.getParam("ITEM");

  return (
    <ImageBackground
      source={{ uri: IMAGE_URL + item.backdrop_path }}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: IMAGE_URL + item.backdrop_path }}
            style={styles.image}
          />
        </View>

        <View style={styles.containerDescription}>
          <Text>ádasdasd</Text>
        </View>
      </View>
      <View style={{ marginLeft: 16 }}>
        <Text style={{ fontSize: 16 }}>{item.release_date}</Text>
        <Text style={{ fontSize: 20 }}>{item.title}</Text>
      </View>
    </ImageBackground>
  );
}
