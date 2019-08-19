import Api from "../../api";
import ApiConstants from "../ApiConstants";

const movies = (type, page) => {
  return Api(
    ApiConstants.TYPE + type + "?api_key=" + ApiConstants.KEY + "&page=" + page,
    null,
    "GET",
    null
  );
};

export const APIs = {
  movies
};
