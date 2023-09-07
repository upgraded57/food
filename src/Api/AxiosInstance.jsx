import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    if (err.code === "ERR_NETWORK" && err.message === "Network Error") {
      console.log("Network caused this error");
    }
  }
);
