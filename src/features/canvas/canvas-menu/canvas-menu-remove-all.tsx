import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@shared/components/shadcnui";
import { XIcon } from "lucide-react";
import { useComponentsStore } from "@stores";

export const CanvasMenuRemoveAll = () => {
  const componentsCount = useComponentsStore((state) => state.componentsCount);
  const removeAllComponents = useComponentsStore(
    (state) => state.removeAllComponents,
  );
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div>
          <Button
            variant="outline"
            size={"icon"}
            className="ml-2 shadow-sm"
            disabled={!componentsCount}
            onClick={() => removeAllComponents()}
          >
            <XIcon />
          </Button>
        </div>
      </TooltipTrigger>
      <TooltipContent>전체 삭제</TooltipContent>
    </Tooltip>
  );
};
