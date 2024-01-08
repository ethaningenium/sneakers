import axios from "axios";

const api = axios.create({
  baseURL: "https://65953dd904335332df824a3e.mockapi.io/products",
});

export default api;
