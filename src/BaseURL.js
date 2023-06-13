import axios from "axios";

const baseURL = "http://192.168.1.101:8080/api/v1/";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
