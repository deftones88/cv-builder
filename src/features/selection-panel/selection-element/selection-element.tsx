import {
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@shared/components/shadcnui";
import { SelectionListType } from "../selection-list/";
import { cn } from "@shared/lib/utils";
import { useDraggable } from "@dnd-kit/core";
import { useComponentsStore } from "@stores";
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

    const { isMobile, setOpenMobile } = useSidebar();
    const addComponent = useComponentsStore((state) => state.addComponent);
    const componentsCount = useComponentsStore(
      (state) => state.componentsCount,
    );

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

    /**
     * 모바일에서는 드래그가 성립하지 않는다.
     * 선택 패널 서랍(288px)을 열면 캔버스가 87px만 남아 놓을 곳이 보이지 않는다.
     * 대신 탭하면 현재 페이지 맨 뒤에 추가하고 서랍을 닫는다.
     * (addComponent가 추가된 컴포넌트를 자동 선택하므로 설정 시트가 이어서 열린다)
     */
    const handleTapToAdd = () => {
      if (!isMobile) return;

      addComponent(componentsCount, {
        type,
        settings: props as Record<string, unknown>,
        title: settingsTitle,
      });
      setOpenMobile(false);
    };

    return (
      <SidebarMenuSubItem className="flex w-full h-full">
        <SidebarMenuSubButton
          className={cn(
            "flex flex-col items-center justify-center w-full h-full p-2 space-y-2 rounded-md border border-border hover:bg-accent",
            isMobile ? "cursor-pointer" : "cursor-grab",
            draggable.isDragging && "ring-1 ring-primary",
          )}
          ref={draggable.setNodeRef}
          {...draggable.listeners}
          {...draggable.attributes}
          onClick={handleTapToAdd}
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
