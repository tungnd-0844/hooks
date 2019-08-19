import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { APIs } from "../../api/methods/movies";
import NavigationService from "../../navigation/NavigationService";
import { TYPE, alert } from "../../utils/stringUtils";
import ItemGenre from "../../components/ItemGenre";
import Toolbar from "../../components/Toolbar";

import styles from "./styles";

const HomeView = props => {
  const page = 1;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        var data = [];
        for (let i = 0; i < TYPE.length; i++) {
          data.push({ genre: TYPE[i], arr: await APIs.movies(TYPE[i], page) });
        }
        setIsLoading(false);
        setData(data);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  navigateDetails = item => {
    NavigationService.navigate("Detail", { ITEM: item });
  };

  navigateMovies = genre => {
    NavigationService.navigate("ListMovies", { GENRE: genre });
  };

  return (
    <View style={styles.container}>
      <Toolbar />
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.activityLoading} />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (
              <ItemGenre
                item={item}
                navigateDetails={navigateDetails}
                navigateMovies={navigateMovies}
              />
            );
          }}
          keyExtractor={({ id }, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default HomeView;
