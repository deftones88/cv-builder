import {
  SidebarMenu,
  SidebarMenuButton,
  useSidebar,
} from "@shared/components/shadcnui";
import { BlocksIcon, ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";

export const SelectionPanelHeader = () => {
  const { open, toggleSidebar } = useSidebar();

  return (
    <SidebarMenu>
      {/* 헤더 자체가 접기 토글이다 (캔버스 상단 버튼·SidebarRail과 같은 동작) */}
      <SidebarMenuButton
        size="lg"
        onClick={toggleSidebar}
        aria-label={open ? "컴포넌트 목록 접기" : "컴포넌트 목록 펼치기"}
        className="cursor-pointer data-[state=open]:bg-sidebar-accent"
      >
        <div className="flex aspect-square size-5 m-2 items-center justify-center rounded-lg">
          <BlocksIcon />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate text-lg">선택</span>
        </div>
        {open ? (
          <ChevronsLeftIcon className="size-4 shrink-0" />
        ) : (
          <ChevronsRightIcon className="size-4 shrink-0" />
        )}
      </SidebarMenuButton>
    </SidebarMenu>
  );
};
