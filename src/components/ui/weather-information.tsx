import { useNavigate } from "react-router";
import { Button } from "./button";
import { Card, CardContent, CardTitle } from "./card";

const WeatherInformation = ({ data, more }: { data: any; more?: boolean }) => {
  const navigate = useNavigate();

  const baseItems = [
    {
      label: "Temperature",
      value: `${data?.main.temp}°C`,
    },
    {
      label: "Feels Like",
      value: `${data?.main.feels_like}°C`,
    },
    {
      label: "Humidity",
      value: `${data?.main.humidity}%`,
    },
    {
      label: "Wind",
      value: `${data?.wind.speed} km/h`,
    },
  ];

  const extraItems = [
    {
      label: "Min. temperature",
      value: `${data?.main.temp_min}°C`,
    },
    {
      label: "Max. temperature",
      value: `${data?.main.temp_max}°C`,
    },
    {
      label: "Pressure",
      value: `${data?.main.pressure} hPa`,
    },
    {
      label: "Sea level pressure",
      value: `${data?.main.sea_level || data?.main.pressure} hPa`,
    },
    {
      label: "Ground level pressure",
      value: `${data?.main.grnd_level || data?.main.pressure} hPa`,
    },
  ];

  const items = more ? [...baseItems, ...extraItems] : baseItems;

  return (
    <Card className="rounded-lg p-4 shadow-md border-0">
      <CardTitle className="text-lg font-semibold sm:mb-4 flex justify-between items-start">
        <div>Air Conditions</div>
        {!more && (
          <Button
            onClick={() =>
              navigate(`/information/${data?.coord.lat}/${data?.coord?.lon}`)
            }
            variant={"secondary"}
          >
            See more
          </Button>
        )}
      </CardTitle>

      <CardContent
        className={`grid ${
          more ? `sm:grid-cols-3` : `sm:grid-cols-2`
        } sm:gap-6 gap-2 grid-cols-2`}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">
              {item.label}
            </h3>
            <span className="sm:text-xl text-sm font-bold">{item.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default WeatherInformation;
