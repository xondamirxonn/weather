import Forecast from "@/components/ui/forecast";
import WeatherInformation from "@/components/ui/weather-information";
import WeekCard from "@/components/ui/weekCard";
import {
  getTodayWeatherHourlyQuery,
  getTodayWeatherQueryCoord,
} from "@/queries/today";
import { getWeekWeatherByCoordsQuery } from "@/queries/week";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LoaderCircleIcon, SlashIcon } from "lucide-react";
const Inoformations = () => {
  const { lat, long } = useParams();

  const { data: weather, isLoading } = useQuery({
    ...getTodayWeatherQueryCoord(lat || "", long || ""),
    enabled: !!lat && !!long,
  });
  const { data: hourlydata, isLoading: hourlydataLoading } = useQuery({
    ...getTodayWeatherHourlyQuery(lat || "", long || ""),
    enabled: !!lat && !!long,
  });

  const { data: week, isLoading: weekLoading } = useQuery({
    ...getWeekWeatherByCoordsQuery(lat || "", long || ""),
    enabled: !!lat && !!long,
  });

  return (
    <div>
      {(isLoading || hourlydataLoading || weekLoading) ? (
        <div className="flex justify-center items-center h-[80vh]">
          <LoaderCircleIcon className="animate-spin w-12 h-12 text-blue-500" />
        </div>
      ) : (
        <div>

      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={`/?lng=${lat}&lon=${long}`}>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{weather?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex sm:ustify-between gap-4 justify-center flex-col sm:flex-row">
        <div className=" sm:hidden block relative">
          {week && <WeekCard data={week} />}
        </div>
        <div className="sm:w-[75%] w-full flex flex-col gap-3">
          <WeatherInformation more={true} data={weather} />
          {hourlydata && <Forecast data={hourlydata} />}
        </div>
        <div className="w-[30%] relative hidden sm:block">
          {week && <WeekCard data={week} />}
        </div>
      </div>
        </div>
      )}
    </div>
  );
};

export default Inoformations;
