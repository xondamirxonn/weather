import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { searchCityQuery } from "@/queries/city";
import { useQuery } from "@tanstack/react-query";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export function CitySearch() {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const cityParam = searchParams.get("cityName");
  const navigate = useNavigate();
  const [searchCity, setSearchCity] = useState(cityParam || "");

  const { data: params, isLoading } = useQuery({
    ...searchCityQuery(searchCity),
    enabled: searchCity.length >= 3,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchCity.trim().length > 0) {
        navigate(
          `/search/city?cityName=${encodeURIComponent(searchCity.trim())}`
        );
        setOpen(false);
      }
    }
  };

  const handleSelect = (lat: number, lon: number) => {
    navigate(`/?lng=${lat}&lon=${lon}`);
    setOpen(false);
    setSearchCity("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className=" sm:w-[250px]  flex justify-between items-center rounded-md border  px-3 py-2 text-sm  disabled:cursor-not-allowed disabled:opacity-50">
          {cityParam || searchCity || "Search City"}
          <SearchIcon className="ml-2 w-4 h-4 text-muted-foreground" />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] sm:w-[300px] p-0">
        <Command className="rounded-lg  shadow-md">
          <CommandInput
            placeholder="Type city name..."
            value={searchCity}
            onValueChange={(val: string) => setSearchCity(val)}
            onKeyDown={handleKeyDown}
          />
          <CommandList>
            {isLoading && (
              <div className="p-2 text-sm text-muted-foreground">
                Loading...
              </div>
            )}

            {!isLoading && <CommandEmpty>No results found.</CommandEmpty>}

            {params?.list?.map((opt: any) => (
              <CommandItem
                key={opt.id}
                value={opt.name}
                onSelect={() => {
                  if (window.event?.type === "click") {
                    handleSelect(opt.coord.lat, opt.coord.lon);
                  }
                }}
                className="flex items-center gap-2"
              >
                <img
                  src={`https://flagcdn.com/32x24/${opt.sys.country.toLowerCase()}.png`}
                  alt={opt.sys.country}
                  className="w-6 h-4 object-cover rounded-sm"
                />
                {opt.name} {/* Har doim full name */}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
