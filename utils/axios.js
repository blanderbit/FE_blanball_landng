import axios from "axios";

export const HTTP = axios.create({
  baseURL: process.env.ADMIN_API_URL
});
