import request from "@/boot/axios";

export const searchCity = (city: string) => {
  return request({
    method: "GET",
    url: `/find?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
  });
};
