import axios from "axios";

const apiURL = "http://localhost:8000/api/";

const api = axios.create({
  baseURL: apiURL
});

export default api;