// src/api/request.ts
import axios from "axios";

const request = axios.create({
  baseURL: "/api/",
  timeout: 60000,
});

request.defaults.headers.timezone = new Date().getTimezoneOffset();

export default request;
