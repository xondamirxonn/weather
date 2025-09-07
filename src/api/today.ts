import request from "@/boot/axios";

const baseUrl = "/weather?q";

export const getTodayWeatherUrl = (city: string) => {
  return request({
    method: "GET",
    url: `${baseUrl}=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`,
  });
};

export const getTodayWeatherByCoords = (lat: string, lon: string) => {
  return request({
    method: "GET",
    url: `/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`,
  });
};

export const getTodayWeatherHourly = (lat: string, lon: string) => {
  return request({
    method: "GET",
    url: `/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
  });
};

