import { useQuery } from "@tanstack/react-query";

import {
  getTodayWeatherHourlyQuery,
  getTodayWeatherQueryCoord,
} from "@/queries/today";
import { useSearchParams } from "react-router";
import Forecast from "@/components/ui/forecast-daily";
import { getWeekWeatherByCoordsQuery } from "@/queries/week";
import WeekCard from "@/components/ui/weekCard";
import WeatherInformation from "@/components/ui/weather-information";
import WeatherCard from "@/components/ui/weatherCard";
import { LoaderCircleIcon } from "lucide-react";

const HomePage = () => {
  const [params] = useSearchParams();
  const lng = params.get("lng");
  const long = params.get("lon");

  const lat = lng;
  const lon = long;
  // 4. Weather query (shahar orqali)
  const { data: weather, isLoading } = useQuery({
    ...getTodayWeatherQueryCoord(lat || "", lon || ""),
    enabled: !!lat && !!lon,
  });
  const { data: hourlydata, isLoading: hourlydataLoading } = useQuery({
    ...getTodayWeatherHourlyQuery(lat || "", lon || ""),
    enabled: !!lat && !!lon
  });

  const { data: week, isLoading: weekLoading } = useQuery({
    ...getWeekWeatherByCoordsQuery(lat || "", lon || ""),
    enabled: !!lat && !!lon
  });

  return (
    <div className="">
      {(isLoading || hourlydataLoading || weekLoading) ?(
        <div className="flex justify-center items-center h-[80vh]">
          <LoaderCircleIcon className="animate-spin w-12 h-12 text-blue-500" />
        </div>
      ) : (

      <div className="flex flex-col sm:flex-row gap-5  sm:justify-between"
>
          <div className=" sm:hidden block relative">
          {week && <WeekCard data={week} />}
        </div>
        <div className="flex flex-col gap-5 w-full sm:w-[70%] pt-2">
          {weather && <WeatherCard data={weather} />}
          {hourlydata && <Forecast data={hourlydata} />}
          {weather && <WeatherInformation data={weather} />}
        </div>
        <div className="w-[30%] relative hidden sm:block">
          {week && <WeekCard data={week} />}
        </div>
      </div>
      )}

    </div>
  );
};

export default HomePage;
