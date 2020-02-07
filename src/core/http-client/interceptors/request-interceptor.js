import axios from "../instance";
import store from "@/store";

axios.interceptors.request.use(
  config => {
    store.state.showLoading = true;
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Authorization"] = `bearer ${localStorage.getItem("token")}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
