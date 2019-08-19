import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  TouchableOpacity
} from "react-native";
import ToolbarBack from "../../components/ToolbarBack";
import NavigationService from "../../navigation/NavigationService";
import ItemListMovies from "../../components/ItemListMovies";
import { APIs } from "../../api/methods/movies";
import { alert } from "../../utils/stringUtils";
import {} from "../../navigation/NavigationService";
import styles from "./styles";

const ListMoviesView = props => {
  const { navigation } = props;
  const genre = navigation.getParam("GENRE");

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  goBackHome = () => {
    NavigationService.goBack("Home");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const movies = await APIs.movies(genre, page);

        setIsLoading(false);

        setData(movies);
        setPage(page + 1);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  loadMoreMovies = async page => {
    try {
      const loadMoreMovies = await APIs.movies(genre, page);

      setData([...data, ...loadMoreMovies]);
      setPage(page + 1);
    } catch (error) {
      alert(error);
    }
  };

  onRefreshMovies = async page => {
    try {
      setIsRefresh(true);
      const refreshMovies = await APIs.movies(genre, page);

      setData(refreshMovies);
      setIsRefresh(false);
      setPage(page + 1);
    } catch (error) {
      alert(error);
    }
  };

  renderFooter = () => {
    return <ActivityIndicator style={{ color: "white" }} size={"large"} />;
  };

  navigateDetails = item => {
    NavigationService.navigate("Detail", { ITEM: item });
  };

  return (
    <View style={styles.container}>
      <ToolbarBack goBack={goBackHome} title={genre} />
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.activityLoading} />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => navigateDetails(item)}>
                <ItemListMovies item={item} />
              </TouchableOpacity>
            );
          }}
          onEndReachedThreshold={0}
          onEndReached={() => loadMoreMovies(page)}
          ListFooterComponent={() => renderFooter()}
          keyExtractor={({ id }, index) => index.toString()}
          refreshControl={
            <RefreshControl
              onRefresh={() => onRefreshMovies(1)}
              refreshing={isRefresh}
            />
          }
        />
      )}
    </View>
  );
};

export default ListMoviesView;
