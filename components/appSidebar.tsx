import { GalleryVerticalEnd } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import NavApplication from "./nav-application";
import NavMain from "./nav-main";
import { getUser } from "@/app/actions";

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const userData = await getUser();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <span className="sr-only">Flowventory</span>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Flowventory</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavApplication />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: "Bernardo Ochoa",
            email: userData.user?.email as string,
            avatar: "https://github.com/bernardo-ochoa.png",
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
