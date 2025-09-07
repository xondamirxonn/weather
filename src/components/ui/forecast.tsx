import { Card, CardContent, CardTitle } from "./card";
import moment from "moment";

const Forecast = ({ data }: { data: any }) => {
  const groupedByDay = data?.list?.reduce((acc: any, item: any) => {
    const date = moment(item.dt_txt).format("YYYY-MM-DD"); 
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(groupedByDay || {}).map(([date, items]: any) => (
        <Card key={date} className="border p-4 flex flex-col">
          <CardTitle className="text-base font-medium mb-2 text-center">
            {moment(date).format("dddd, DD MMM")}
          </CardTitle>
          <CardContent className="flex flex-col gap-4">
            {items.map((item: any) => (
              <div
                key={item.dt}
                className="flex justify-between items-center text-sm"
              >
                <div>{moment(item.dt_txt).format("HH:mm")}</div>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather?.[0].icon}.png`}
                  alt={item.weather?.[0].description}
                  className="w-10 h-10"
                />
                <div>{Math.round(item.main.temp)}°C</div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Forecast;
