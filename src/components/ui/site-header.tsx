import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { CitySearch } from "../common/CitySearch";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {



  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex h-[var(--header-height)] shrink-0 items-center gap-2 border-b bg-background transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[var(--header-height)]">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Weather App</h1>
        <div className="ml-auto relative flex items-center gap-2">
          <CitySearch />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
