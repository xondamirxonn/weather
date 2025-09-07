import request from "@/boot/axios";
import { settings } from "@/boot/settings";
export const getCountries = () => {
  return request({
    method: "GET",
    url: `weather/locations/v1/countries?apikey=${settings.weatherApiKey}`,
  });
};

