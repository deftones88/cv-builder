import { Dispatch, memo, RefObject, SetStateAction } from "react";
import { Paper } from "../canvas-paper.types";
import { CanvasMenuSizeSelect } from "./canvas-menu-size-select";
import { PdfExportButton } from "@features/pdf-export-button";
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
  pageRefs: RefObject<(HTMLDivElement | null)[]>;
};

export const CanvasMenu = memo(
  ({ paperSize, setPaperSize, pageRefs }: CanvasMenuProps) => {
    return (
      <div
        className="absolute top-4 flex flex-col gap-2 items-center"
        // 메뉴 클릭이 캔버스 컨테이너로 버블링되면 handleOutsideClick이 돌아
        // 선택이 풀려 설정 패널이 닫힌다
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex pl-0 md:pl-8">
          <CanvasMenuSizeSelect
            paperSize={paperSize}
            setPaperSize={setPaperSize}
          />
          <PdfExportButton pageRefs={pageRefs} paperSize={paperSize} />
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
