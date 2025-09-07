import { Card, CardContent } from "@/components/ui/card";

const WeatherCard = ({ data, flag }: { data: any; flag?: boolean }) => {


  return (
    <Card className="w-full  border-0">
      <CardContent>
        <div className="flex justify-between w-full items-center">
          <section className="flex flex-col gap-20">
            
            <div className="flex flex-col gap-1">
              {flag ? (
                <div className="flex items-center gap-3">
                  <img
                    src={`https://flagcdn.com/32x24/${data.sys.country.toLowerCase()}.png`}
                    alt={data.sys.country}
                    className="w-6 h-4 object-cover rounded-sm"
                  />
                  <h1 className="text-3xl font-bold">{data?.name}</h1>
                </div>
              ) : (
                <h1 className="text-3xl font-bold">{data?.name}</h1>
              )}
              <span>{data?.weather[0].description}</span>
            </div>

            <h2 className="text-2xl font-bold">{data.main.temp}°C</h2>
          </section>

          <div>
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
              alt={data?.weather[0]?.description}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
