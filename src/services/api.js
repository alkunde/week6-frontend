import axios from "axios";

const api = axios.create({
  baseURL: "https://week6-mobile-backend.herokuapp.com/",
});

export default api;