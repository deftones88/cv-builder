import {
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@shared/components/shadcnui";
import { SelectionListType } from "../selection-list/";
import { cn } from "@shared/lib/utils";
import { useDraggable } from "@dnd-kit/core";
import { memo } from "react";

type SelectionElementProps = {
  element: SelectionListType.SelectionBtnElement;
  categoryIdx: number;
};

export const SelectionElement = memo(
  ({ element, categoryIdx }: SelectionElementProps) => {
    const {
      title,
      icon: Icon,
      className,
      type,
      props,
      settingsTitle,
    } = element;
    const draggable = useDraggable({
      id: `element-btn-${title}`,
      data: {
        type,
        title,
        props,
        settingsTitle,
        categoryIdx: categoryIdx,
        isComponentBtnElement: true,
      },
    });
    return (
      <SidebarMenuSubItem className="flex w-full h-full">
        <SidebarMenuSubButton
          className={cn(
            "flex flex-col items-center justify-center w-full h-full p-2 space-y-2 rounded-md border border-border hover:bg-accent cursor-grab",
            draggable.isDragging && "ring-1 ring-primary",
          )}
          ref={draggable.setNodeRef}
          {...draggable.listeners}
          {...draggable.attributes}
        >
          <span className="h-2">{title}</span>
          <Icon className={cn("w-6 h-6", className)} />
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.element === nextProps.element &&
      prevProps.categoryIdx === nextProps.categoryIdx
    );
  },
);
