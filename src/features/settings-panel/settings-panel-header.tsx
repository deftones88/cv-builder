import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useSidebar,
} from "@shared/components/shadcnui";
import {
  ChevronsLeftIcon,
  ChevronsRightIcon,
  Settings2Icon,
} from "lucide-react";

export const SettingsPanelHeader = () => {
  const { open, toggleSidebar } = useSidebar();

  return (
    <div className="flex items-center gap-1">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-8 shrink-0 cursor-pointer"
            onClick={toggleSidebar}
            aria-label={open ? "상세 설정 접기" : "상세 설정 펼치기"}
          >
            {open ? <ChevronsRightIcon /> : <ChevronsLeftIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">상세 설정 접기/펼치기</TooltipContent>
      </Tooltip>
      {/* 접혔을 때(아이콘 폭)는 토글만 남기고 제목은 숨긴다 */}
      <div className="flex items-center gap-1 overflow-hidden group-data-[state=collapsed]:hidden">
        <div className="flex aspect-square size-5 items-center justify-center rounded-lg">
          <Settings2Icon />
        </div>
        <span className="truncate text-lg">상세 설정</span>
      </div>
    </div>
  );
};
