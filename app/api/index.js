import ApiConstants from "./ApiConstants";
export default function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token && { token: token })
    },
    method: method,
    ...(params && { body: JSON.stringify(params) })
  };

  return fetch(ApiConstants.BASE_URL + path, options)
    .then(response => response.json())
    .then(json => json.results)
    .catch(error => error);
}
