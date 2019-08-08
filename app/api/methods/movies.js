import Api from "../../api";
import ApiConstants from "../ApiConstants";

const movies = type => {
  return Api(
    ApiConstants.TYPE + type + "?api_key=" + ApiConstants.KEY + "&page=1",
    null,
    "GET",
    null
  );
};

export const APIs = {
  movies
};
