import axios from "axios";
export const api = axios.create({
  baseURL: "https://kenziejob.onrender.com",
  timeout: 8 * 1000,
});
