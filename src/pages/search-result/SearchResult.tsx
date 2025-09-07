import { CitySearch } from "@/components/common/CitySearch";
import WeatherCard from "@/components/ui/weatherCard";
import { searchCityQuery } from "@/queries/city";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircleIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

const SearchResult = () => {
  const [params] = useSearchParams();
  const cityName = params.get("cityName");
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    ...searchCityQuery(cityName || ""),
  });
  return (
    isLoading ? (
<div className="flex justify-center h-[80vh] items-center">
 <LoaderCircleIcon className="animate-spin w-12 h-12 text-blue-500" />
</div>
    ) : (
        <div>
      {data?.list?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data?.list?.map((item: any) => (
            <div
            key={item?.id}
              className="cursor-pointer"
              onClick={() =>
                navigate(`/?lng=${item?.coord?.lat}&lon=${item?.coord?.lon}`)
              }
            >
              <WeatherCard flag={true} data={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center flex-col gap-4 h-[50vh]">
          <div className="flex justify-center">
            <CitySearch />
          </div>
          <h4>{cityName} not found</h4>
        </div>
      )}
    </div>
    )
  
  );
};

export default SearchResult;
