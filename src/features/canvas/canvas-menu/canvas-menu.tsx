import { Dispatch, RefObject, SetStateAction } from "react";
import { Paper } from "../canvas-paper.types";
import { CanvasSizeSelect } from "../canvas-size-select";
import { ExportToPDF } from "@features/export-to-pdf";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useSidebar,
} from "@shared/components/shadcnui";
import {
  ChevronsLeftRightIcon,
  ChevronsRightLeftIcon,
  XIcon,
} from "lucide-react";
import { useComponentsStore } from "@stores";

type CanvasMenuProps = {
  paperSize: Paper;
  setPaperSize: Dispatch<SetStateAction<Paper>>;
  aspectRatioRef: RefObject<HTMLDivElement | null>;
};

export const CanvasMenu = ({
  paperSize,
  setPaperSize,
  aspectRatioRef,
}: CanvasMenuProps) => {
  const { open, toggleSidebar } = useSidebar();
  const components = useComponentsStore((state) => state.components);
  const removeAllComponents = useComponentsStore(
    (state) => state.removeAllComponents,
  );
  return (
    <div className="absolute top-4 flex">
      <CanvasSizeSelect paperSize={paperSize} setPaperSize={setPaperSize} />
      <ExportToPDF aspectRatioRef={aspectRatioRef} />
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
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <Button
              variant="outline"
              size={"icon"}
              className="ml-2 shadow-sm"
              disabled={!components.length}
              onClick={() => removeAllComponents()}
            >
              <XIcon />
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent>전체 삭제</TooltipContent>
      </Tooltip>
    </div>
  );
};
