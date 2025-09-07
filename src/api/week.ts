import request from "@/boot/axios";

export const getWeekWeatherByCoords = (lat: string, long: string) => {
  return request({
    method: "GET",
    url: `open/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,sunrise,sunset&timezone=auto`,
  });
};
