import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { useState } from "react";

type Countries = {
  label: string;
  value: string;
};

interface FilterSelectProps {
  countries: Countries[];
  onChange?: (value: string) => void;
}

export function FilterSelect({countries , onChange }: FilterSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (val: string) => {
    setSelected(val);
    onChange?.(val);
    setOpen(false); 
  };

  return (
<div>
        <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild className="w-full">
        <button className="w-[50%] justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          {selected
            ? countries.find((o) => o.value === selected)?.label
            : "Select Country"}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {countries?.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={opt.value}
                  onSelect={handleSelect}
                >
                  {opt.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>

</div>
    
  );
}
