import { getTodayWeatherByCoords, getTodayWeatherHourly, getTodayWeatherUrl } from "@/api/today";

export function getTodayWeatherQuery(city: string) {
  return {
    queryKey: ["today-weather", city],
    queryFn: () => getTodayWeatherUrl(city).then((res) => res.data),
  };
}
export function getTodayWeatherQueryCoord(lat: string, long: string) {
  return {
    queryKey: ["today-weather", lat, long],
    queryFn: () => getTodayWeatherByCoords(lat, long).then((res) => res.data),
  };
}

export function getTodayWeatherHourlyQuery(lat: string, long: string) {
  return {
    queryKey: ["hourly-weather", lat, long],
    queryFn: () => getTodayWeatherHourly(lat,long).then((res) => res.data)
  }
}

