import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useSidebar,
} from "@shared/components/shadcnui";
import { ChevronsLeftRightIcon, ChevronsRightLeftIcon } from "lucide-react";

export const CanvasMenuSidebarToggle = () => {
  const { open, openMobile, isMobile, toggleSidebar } = useSidebar();
  // 모바일에서는 서랍(openMobile)이 열림 상태를 나타낸다
  const isOpen = isMobile ? openMobile : open;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size={"icon"}
          className="shadow-sm ml-0 md:ml-6 rounded-r-none cursor-pointer"
          onClick={toggleSidebar}
          aria-label={isOpen ? "컴포넌트 목록 닫기" : "컴포넌트 목록 열기"}
        >
          {isOpen ? <ChevronsLeftRightIcon /> : <ChevronsRightLeftIcon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>컴포넌트 목록 열기/닫기</TooltipContent>
    </Tooltip>
  );
};
