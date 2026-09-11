import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@shared/lib/utils";
import { CanvasComponentWrapper } from "./canvas-component-wrapper";
import { Paper } from "./canvas-paper.types";
import { PAPER_PRESETS } from "./canvas-menu";
import { useCanvasPaper } from "./canvas-paper.hooks";

/**
 * 종이를 그리는 기준 폭(px). 기존 `max-w-lg`와 같은 값이라 넓은 화면에서의
 * 모습은 그대로다.
 *
 * 종이는 항상 이 크기로 렌더하고 화면에 맞출 때는 `transform: scale()`만 건다.
 * 폭을 직접 줄이면 안쪽 여백·글자 크기는 px 고정이라 같이 줄지 않아
 * 종이 대비 비율이 망가진다. (768px에서 여백이 6.25% -> 30.3%까지 벌어졌다)
 * scale은 자식 전체를 같은 비율로 줄이므로 위치와 간격이 그대로 유지된다.
 */
export const PAPER_DESIGN_WIDTH = 512;

type PaperProps = {
  paperSize: Paper;
  pageIndex: number;
};

export const CanvasPaper = ({ paperSize, pageIndex }: PaperProps) => {
  const selectedDimension =
    PAPER_PRESETS.find((preset) => preset.label === paperSize)?.dimension ??
    210 / 297;

  const designHeight = PAPER_DESIGN_WIDTH / selectedDimension;

  const { droppable, components } = useCanvasPaper({ pageIndex });

  const measureRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    const available = measureRef.current?.clientWidth ?? 0;
    if (!available) return;
    // 넓은 화면에서 종이를 키우지는 않는다 (기존 max-w-lg 동작 유지)
    setScale(Math.min(1, available / PAPER_DESIGN_WIDTH));
  }, []);

  useLayoutEffect(() => {
    updateScale();
    const el = measureRef.current;
    if (!el) return;

    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateScale]);

  return (
    <div ref={measureRef} className="w-full flex justify-center">
      {/* 축소된 크기만큼만 자리를 차지한다 (transform은 레이아웃 박스를 바꾸지 않는다) */}
      <div
        data-paper-viewport
        style={{
          width: PAPER_DESIGN_WIDTH * scale,
          height: designHeight * scale,
        }}
      >
        <div
          ref={droppable.setNodeRef}
          data-paper-sheet
          style={{
            width: PAPER_DESIGN_WIDTH,
            height: designHeight,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
          className={cn(
            "bg-white shadow-xl flex flex-col items-center justify-start py-5 px-8",
            droppable.isOver && "ring-inset ring-1 ring-primary/20",
          )}
        >
          {!components.length && !droppable.isOver && (
            <p
              className="text-3xl text-muted-foreground flex flex-grow items-center font-bold text-center"
              data-html2canvas-ignore
            >
              컴포넌트를
              <br />
              이곳으로 드레그해보세요
            </p>
          )}
          {components.length > 0 &&
            components.map((component) => (
              <CanvasComponentWrapper
                component={component}
                key={component.id}
              />
            ))}
          {droppable.isOver && (
            <div className="h-[120px] w-full rounded-md bg-gray-500/20" />
          )}
        </div>
      </div>
    </div>
  );
};
