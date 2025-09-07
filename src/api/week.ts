import request from "@/boot/axios";
import { settings } from "@/boot/settings";

export const getWeekWeatherByCoords = (lat: string, long: string) => {
  return request({
    method: "GET",
    baseURL: settings.openWeatherApi,
    url: `/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,sunrise,sunset&timezone=auto`,
  });
};
