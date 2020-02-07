import axios from "../instance";
import store from "@/store";

axios.interceptors.response.use(
  response => {
    store.state.showLoading = false;
    return response;
  },
  error => {
    store.state.showLoading = false;
    return Promise.reject(error);
  }
);
