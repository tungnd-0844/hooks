import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { IMAGE_URL } from "../../utils/stringUtils";

export default function DetailMovie(props) {
  const { navigation } = props;
  const item = navigation.getParam("ITEM");

  return (
    <View>
      <ImageBackground
        source={{ uri: IMAGE_URL + item.poster_path }}
        style={{ height: "100%", width: "100%" }}
      >
        <Text>{item.title}</Text>
      </ImageBackground>
    </View>
  );
}
