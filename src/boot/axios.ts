// src/api/request.ts
import axios from "axios";
import { settings } from "./settings";

const request = axios.create({
  baseURL: settings.weatherApi,
  timeout: 60000,
});

request.defaults.headers.timezone = new Date().getTimezoneOffset();

export default request;
