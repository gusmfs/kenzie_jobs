import axios from "axios";
export const api = axios.create({
  baseURL: "https://kenzie-jobs.onrender.com",
  timeout: 8 * 1000,
});
