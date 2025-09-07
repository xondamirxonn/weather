import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"
import { SiteHeader } from "@/components/ui/site-header"
import { Outlet } from "react-router"
import { useState } from "react"


export default function MainLayouts() {
  const [searchCity, setSearchCity] = useState("")

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <SidebarInset>
      <AppSidebar  />
        <SiteHeader  />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

             {<Outlet context={{searchCity, setSearchCity}} />} 
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
