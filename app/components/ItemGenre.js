import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import ItemMovie from "./ItemMovie";
import PropTypes from "prop-types";

const ItemGenre = props => {
  const { item } = props;
  return (
    <View>
      <View style={styles.containerHeader}>
        <Text>{item.genre.toUpperCase()}</Text>
        <Text>Xem tất cả</Text>
      </View>
      <FlatList
        data={item.arr}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => props.navigate(item)}>
              <ItemMovie item={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={({ id }, index) => index.toString()}
      />
    </View>
  );
};
export default ItemGenre;

ItemGenre.propTypes = {
  navigate: PropTypes.func
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8
  }
});
