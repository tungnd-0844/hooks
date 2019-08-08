import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ToolbarBack from "../../components/ToolbarBack";
import NavigationService from "../../navigation/NavigationService";

const ListMoviesView = props => {
  const { navigation } = props;
  const genre = navigation.getParam("GENRE");

  goBackHome = () => {
    NavigationService.goBack("Home");
  };

  return (
    <View>
      <ToolbarBack goBack={goBackHome} title={genre} />
      <Text>{genre}</Text>
    </View>
  );
};

export default ListMoviesView;
