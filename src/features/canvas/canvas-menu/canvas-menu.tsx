import { Dispatch, memo, RefObject, SetStateAction } from "react";
import { Paper } from "../canvas-paper.types";
import { CanvasMenuSizeSelect } from "./canvas-menu-size-select";
import { ExportToPDF } from "@features/export-to-pdf";
import { CanvasMenuSidebarToggle } from "./canvas-menu-sidebar-toggle";
import { CanvasMenuRemoveAll } from "./canvas-menu-remove-all";
import { CanvasMenuAddPaper } from "./canvas-menu-add-paper";

type CanvasMenuProps = {
  paperSize: Paper;
  setPaperSize: Dispatch<SetStateAction<Paper>>;
  aspectRatioRef: RefObject<HTMLDivElement | null>;
};

export const CanvasMenu = memo(
  ({ paperSize, setPaperSize, aspectRatioRef }: CanvasMenuProps) => {
    return (
      <div className="absolute top-4 pl-8 flex">
        <CanvasMenuSizeSelect
          paperSize={paperSize}
          setPaperSize={setPaperSize}
        />
        <ExportToPDF aspectRatioRef={aspectRatioRef} />
        <CanvasMenuAddPaper />
        <CanvasMenuRemoveAll />
        <CanvasMenuSidebarToggle />
      </div>
    );
  },
);
