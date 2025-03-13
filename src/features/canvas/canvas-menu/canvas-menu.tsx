import { Dispatch, memo, RefObject, SetStateAction } from "react";
import { Paper } from "../canvas-paper.types";
import { CanvasSizeSelect } from "./canvas-size-select";
import { ExportToPDF } from "@features/export-to-pdf";
import { CanvasMenuToggle } from "./canvas-menu-toggle";
import { CanvasMenuRemoveAll } from "./canvas-menu-remove-all";

type CanvasMenuProps = {
  paperSize: Paper;
  setPaperSize: Dispatch<SetStateAction<Paper>>;
  aspectRatioRef: RefObject<HTMLDivElement | null>;
};

export const CanvasMenu = memo(
  ({ paperSize, setPaperSize, aspectRatioRef }: CanvasMenuProps) => {
    return (
      <div className="absolute top-4 flex">
        <CanvasSizeSelect paperSize={paperSize} setPaperSize={setPaperSize} />
        <ExportToPDF aspectRatioRef={aspectRatioRef} />
        <CanvasMenuToggle />
        <CanvasMenuRemoveAll />
      </div>
    );
  },
);
