import { getCountries } from "@/api/countries";

export function getCountriesQuery() {
  return {
    queryKey: ["countries", ],
    queryFn: () => getCountries().then((res) => res.data),
  };
}