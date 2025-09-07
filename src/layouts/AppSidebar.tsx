import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
   <Sidebar className="w-[65px] bg-sidebar text-sidebar-foreground">
  <SidebarHeader />
  <SidebarContent>
    <SidebarGroup />
    <SidebarGroup />
  </SidebarContent>
  <SidebarFooter />
</Sidebar>

  )
}