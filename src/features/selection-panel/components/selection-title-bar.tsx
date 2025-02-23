import {
  SidebarMenu,
  SidebarMenuButton,
  //   SidebarTrigger,
} from "@shared/components/shadcnui";
import { BlocksIcon } from "lucide-react";

export const SelectionTitleBar = () => {
  return (
    <SidebarMenu>
      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-sidebar-accent hover:bg-transparent hover:text-sidebar-foreground"
      >
        <div className="flex aspect-square size-5 m-2 items-center justify-center rounded-lg">
          {/* <SidebarTrigger className="size-4" /> */}
          <BlocksIcon />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate text-lg">선택</span>
        </div>
      </SidebarMenuButton>
    </SidebarMenu>
  );
};
