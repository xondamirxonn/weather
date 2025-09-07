import { searchCity } from "@/api/city";

export function searchCityQuery(city: string) {
    return {
        queryKey: ["search", city],
        queryFn: () => searchCity(city).then((res) => res.data)
    }
}