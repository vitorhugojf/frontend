import axios from "./instance";

export default class HttpClient {

  constructor(controller) {
    this.controller = controller;
  }

  get(action = "") {
    return axios.get(`${this.controller}/${action}`);
  }

  post(action = "", body) {
    return axios.post(`${this.controller}/${action}`, body);
  }

  put(action = "", body) {
    return axios.put(`${this.controller}/${action}`, body);
  }

  patch(action = "", body) {
    return axios.patch(`${this.controller}/${action}`, body);
  }

  delete(action = "") {
    return axios.delete(`${this.controller}/${action}`);
  }
}
