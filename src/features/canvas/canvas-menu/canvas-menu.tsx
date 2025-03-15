import { Dispatch, memo, RefObject, SetStateAction } from "react";
import { Paper } from "../canvas-paper.types";
import { CanvasMenuSizeSelect } from "./canvas-menu-size-select";
import { ExportToPDF } from "@features/export-to-pdf";
import { CanvasMenuSidebarToggle } from "./canvas-menu-sidebar-toggle";
import {
  CanvasMenuClear,
  CanvasMenuRemove,
  CanvasMenuRemoveAll,
} from "./canvas-menu-remove";
import { CanvasMenuAddPaper } from "./canvas-menu-add-paper";

type CanvasMenuProps = {
  paperSize: Paper;
  setPaperSize: Dispatch<SetStateAction<Paper>>;
  aspectRatioRef: RefObject<HTMLDivElement | null>;
};

export const CanvasMenu = memo(
  ({ paperSize, setPaperSize, aspectRatioRef }: CanvasMenuProps) => {
    return (
      <div className="absolute top-4 flex flex-col gap-2 items-center">
        <div className="flex pl-8">
          <CanvasMenuSizeSelect
            paperSize={paperSize}
            setPaperSize={setPaperSize}
          />
          <ExportToPDF aspectRatioRef={aspectRatioRef} />
          <CanvasMenuSidebarToggle />
          <CanvasMenuRemoveAll />
        </div>
        <div className="flex">
          <CanvasMenuAddPaper />
          <CanvasMenuClear />
          <CanvasMenuRemove />
        </div>
      </div>
    );
  },
);
