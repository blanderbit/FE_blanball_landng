import axios from "axios";

export const HTTP = axios.create({
  baseURL: process.env.NUXT_ENV_ADMIN_API_URL
});
