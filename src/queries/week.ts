import { getWeekWeatherByCoords } from "@/api/week";


export  function getWeekWeatherByCoordsQuery(lat: string, long: string) {
 return {
    queryKey: ["week-weather", lat, long],
    queryFn: () => getWeekWeatherByCoords(lat,long ).then((res) => res.data)
 }
}