import { Card,CardTitle } from "./card";
import moment from "moment";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const ForecastDaily = ({ data }: { data: any }) => {
  return (
    <Card className="border-0 p-4 overflow-hidden">
      <CardTitle className="flex items-start p-2">Today's forecast</CardTitle>

      <Carousel className="relative">
        <CarouselContent className="flex gap-4">
          {data?.list?.slice(0, 8).map((item: any, index: number) => (
            <CarouselItem
              key={index}
              className=" md:basis-1/2 lg:basis-1/6 flex items-center flex-col"
            >
              <div className="text-sm text-muted-foreground text-center mb-2">
                <div>{moment(item.dt_txt).format("DD.MM.YYYY")}</div>
                <div>{moment(item.dt_txt).format("HH:mm")}</div>
              </div>

              <img
                src={`http://openweathermap.org/img/wn/${item.weather?.[0].icon}@2x.png`}
                alt={item.weather?.[0].description}
                className="w-16 h-16"
              />

              <div className="mt-2 font-medium text-center">
                {Math.round(item.main.temp)}°C
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
      </Carousel>
    </Card>
  );
};

export default ForecastDaily;
