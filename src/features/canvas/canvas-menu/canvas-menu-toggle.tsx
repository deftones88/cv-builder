import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useSidebar,
} from "@shared/components/shadcnui";
import { ChevronsLeftRightIcon, ChevronsRightLeftIcon } from "lucide-react";

export const CanvasMenuToggle = () => {
  const { open, toggleSidebar } = useSidebar();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size={"icon"}
          className="ml-4 shadow-sm"
          onClick={toggleSidebar}
        >
          {open ? <ChevronsLeftRightIcon /> : <ChevronsRightLeftIcon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>사이드바 숨김/열기</TooltipContent>
    </Tooltip>
  );
};
