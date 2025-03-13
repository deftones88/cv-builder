import {
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@shared/components/shadcnui";
import { SelectionListType } from "../selection-list";
import { cn } from "@shared/lib/utils";
import { memo } from "react";

type SelectionElementOverlayProps = {
  element: SelectionListType.SelectionBtnElement;
};

export const SelectionElementOverlay = memo(
  ({ element }: SelectionElementOverlayProps) => {
    const { title, icon: Icon, className } = element;
    return (
      <SidebarMenuSubItem className="flex w-full h-full">
        <SidebarMenuSubButton className="flex flex-col items-center justify-center w-full h-full p-2 space-y-2 rounded-md border border-border hover:bg-accent cursor-grab bg-gray-300/70">
          <span className="h-2">{title}</span>
          <Icon className={cn("w-6 h-6", className)} />
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    );
  },
);
