import axios from "axios";

const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://project-f678257b-bae1-4ec4-a5a.du.r.appspot.com"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,
});

const authAPi = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,
});

authAPi.interceptors.request.use(
  config => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  error => Promise.reject(error)
);

export { api, authAPi };