import { Platform, ToastAndroid, Alert } from "react-native";

export const TYPE = ["popular", "now_playing", "upcoming", "top_rated"];

export const IMAGE_URL = "http://image.tmdb.org/t/p/w500";

export const alert = notifi => {
  Platform.OS === "android"
    ? ToastAndroid.show(notifi, ToastAndroid.SHORT)
    : Alert.alert(
        "Alert Title",
        notifi,
        [
          {
            text: "Cancel",
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
};
