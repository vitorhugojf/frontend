import axios from "axios";

const baseURL = `https://localhost:5001/api/`;

const instance = axios.create({
  baseURL
});

export default instance;
