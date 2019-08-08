import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "../screens/home/HomeView";
import Detail from "../screens/detailmovie/DetailMovie";
import Favourite from "../screens/favourite/FavouriteView";
import ListMovies from "../screens/listmovie/ListMoviesView";
import Ionicons from "react-native-vector-icons/Ionicons";

const RNHome = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    Detail: {
      screen: Detail,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    ListMovies: {
      screen: ListMovies,
      navigationOptions: { header: null, gesturesEnabled: false }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const RNFavourite = createStackNavigator(
  {
    Favourite: {
      screen: Favourite,
      navigationOptions: { header: null, gesturesEnabled: false }
    }
  },
  {
    initialRouteName: "Favourite"
  }
);

const RNApp = createBottomTabNavigator(
  {
    Home: RNHome,
    Favourite: RNFavourite
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-videocam`;
        } else if (routeName === "Favourite") {
          iconName = `ios-star`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(RNApp);
