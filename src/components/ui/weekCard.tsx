import React from "react";
import { Card, CardContent, CardTitle } from "./card";
import moment from "moment";
import { Separator } from "@radix-ui/react-separator";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./sheet";
import { Button } from "./button";

const weatherCodeMap: Record<number, { label: string; icon: string }> = {
  0: {
    label: "Clear sky",
    icon: "https://www.weatherbit.io/static/img/icons/c01d.png",
  },
  1: {
    label: "Mainly clear",
    icon: "https://www.weatherbit.io/static/img/icons/c02d.png",
  },
  2: {
    label: "Partly cloudy",
    icon: "https://www.weatherbit.io/static/img/icons/c03d.png",
  },
  3: {
    label: "Overcast",
    icon: "https://www.weatherbit.io/static/img/icons/c04d.png",
  },
  61: {
    label: "Rain",
    icon: "https://www.weatherbit.io/static/img/icons/r01d.png",
  },
  63: {
    label: "Moderate rain",
    icon: "https://www.weatherbit.io/static/img/icons/r02d.png",
  },
  // kerak bo‘lsa barcha weather code’larni qo‘shing
};

const WeekCard = ({ data }: { data: any }) => {
  return (
    <>
      <Card className="border-0 p-4 sticky top-16 hidden sm:block">
        <CardTitle className="flex items-start p-2">7-Day Forecast</CardTitle>
        <CardContent className="flex gap-4 flex-col overflow-auto h-[73.5vh] items-center custom-scroll">
          {data?.daily?.time?.map((day: string, index: number) => {
            const weather = weatherCodeMap[data.daily.weathercode[index]];

            return (
              <React.Fragment key={index}>
                <div className="flex-shrink-0 w-36 p-2 flex flex-col items-center gap-2 ">
                  <div className="font-medium">
                    {moment(day).format("DD.MM.YYYY")}
                  </div>
                  {weather && (
                    <>
                      <img
                        src={weather.icon}
                        alt={weather.label}
                        className="w-12 h-12"
                      />
                    </>
                  )}
                  <div className="flex gap-2">
                    <div className="text-red-500">
                      {data.daily.temperature_2m_max[index]}°C
                    </div>
                    <div className="text-blue-500">
                      {data.daily.temperature_2m_min[index]}°C
                    </div>
                  </div>
                  <div className="text-xs">
                    Rain: {data.daily.precipitation_sum[index]} mm
                  </div>
                </div>
                {index < data.daily.time.length - 1 && (
                  <Separator className="w-full border-t border-gray-300 mt-2" />
                )}
              </React.Fragment>
            );
          })}
        </CardContent>
      </Card>
      <Sheet>
        <SheetTrigger asChild className="block sm:hidden sticky top-16">
         <div className="flex justify-end mt-3">
           <Button variant={"outline"}>7-Day Forecast</Button>
         </div>
        </SheetTrigger>
        <SheetContent className="sm:hidden p-4">
          <SheetTitle>7-Day Forecast</SheetTitle>
          <div className="flex flex-col gap-4 overflow-auto h-screen pb-10 items-center custom-scroll">
            {data?.daily?.time?.map((day: string, index: number) => {
              const weather = weatherCodeMap[data.daily.weathercode[index]];

              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-36 p-2 flex flex-col items-center gap-2"
                >
                  <div className="font-medium">
                    {moment(day).format("DD.MM.YYYY")}
                  </div>
                  {weather && (
                    <img
                      src={weather.icon}
                      alt={weather.label}
                      className="w-12 h-12"
                    />
                  )}
                  <div className="flex gap-2">
                    <div className="text-red-500">
                      {data.daily.temperature_2m_max[index]}°C
                    </div>
                    <div className="text-blue-500">
                      {data.daily.temperature_2m_min[index]}°C
                    </div>
                  </div>
                  <div className="text-xs">
                    Rain: {data.daily.precipitation_sum[index]} mm
                  </div>
                  {index < data.daily.time.length - 1 && (
                    <Separator className="w-full border-t border-gray-300 mt-2" />
                  )}
                </div>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default WeekCard;
