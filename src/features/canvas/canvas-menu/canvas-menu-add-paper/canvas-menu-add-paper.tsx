import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@shared/components/shadcnui";
import { PlusIcon } from "lucide-react";

export const CanvasMenuAddPaper = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div>
          <Button
            variant="outline"
            size={"icon"}
            className="ml-4 rounded-r-none shadow-sm"
            // disabled={!componentsCount}
            // onClick={() => removeAllComponents()}
          >
            <PlusIcon />
          </Button>
        </div>
      </TooltipTrigger>
      <TooltipContent>페이지 추가</TooltipContent>
    </Tooltip>
  );
};
