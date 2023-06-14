import axios from "axios";

const baseURL = "http://192.168.179.177:8080/api/v1/";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
