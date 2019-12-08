import axios from "axios";
import "dotenv/config";

const api = axios.create({
  baseURL: "http://localhost:5050",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default api;
