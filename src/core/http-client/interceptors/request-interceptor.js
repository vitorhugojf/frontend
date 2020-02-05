import axios from "../instance";

axios.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Authorization"] = `bearer ${localStorage.getItem(
      "user-token"
    )}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
