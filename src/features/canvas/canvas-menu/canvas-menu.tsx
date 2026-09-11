import { Dispatch, memo, RefObject, SetStateAction, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
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
    // 세로가 짧을 때 툴바가 차지하는 96px을 손수 비울 수 있게 한다
    const [collapsed, setCollapsed] = useState(false);

    return (
      <div
        /*
         * absolute로 띄워 두면 세로가 짧을 때 종이가 툴바 밑으로 파고들었다.
         * sticky로 흐름 안에 두면 자리를 차지해 겹칠 수 없고, 스크롤해도 위에 남는다.
         */
        className="sticky top-0 z-20 shrink-0 w-full mb-4 flex flex-col items-center bg-zinc-200 shadow-[0_4px_6px_-4px_rgb(0_0_0/0.15)]"
        // 메뉴 클릭이 캔버스 컨테이너로 버블링되면 handleOutsideClick이 돌아
        // 선택이 풀려 설정 패널이 닫힌다
        onClick={(event) => event.stopPropagation()}
      >
        {!collapsed && (
          <div className="flex flex-col gap-2 items-center w-full px-2 pt-2">
            {/*
             * 좁은 폭에서는 줄바꿈해 캔버스 밖으로 나가지 않게 한다.
             * (기존 `md:pl-8`은 캔버스의 `md:pr-45` 보정과 짝이던 오프셋이라 함께 뺐다)
             */}
            <div className="flex flex-wrap justify-center">
              <CanvasMenuSizeSelect
                paperSize={paperSize}
                setPaperSize={setPaperSize}
              />
              <PdfExportButton pageRefs={pageRefs} paperSize={paperSize} />
              <CanvasMenuSidebarToggle />
              <CanvasMenuRemoveAll />
            </div>
            <div className="flex flex-wrap justify-center">
              <CanvasMenuAddPaper />
              <CanvasMenuClear />
              <CanvasMenuRemove />
            </div>
          </div>
        )}
        {/* 서랍 손잡이. 접힌 상태에서는 이 줄만 남는다 */}
        <button
          type="button"
          onClick={() => setCollapsed((value) => !value)}
          aria-expanded={!collapsed}
          aria-label={collapsed ? "도구 모음 펼치기" : "도구 모음 접기"}
          title={collapsed ? "도구 모음 펼치기" : "도구 모음 접기"}
          className="w-full flex justify-center py-0.5 text-zinc-500 hover:bg-zinc-300 hover:text-zinc-800 cursor-pointer transition-colors"
        >
          {collapsed ? (
            <ChevronDownIcon size={14} />
          ) : (
            <ChevronUpIcon size={14} />
          )}
        </button>
      </div>
    );
  },
);
