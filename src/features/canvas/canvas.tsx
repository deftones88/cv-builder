import { Container } from "@shared/components/container";
import { useRef, useState } from "react";
import { PAPER_PRESETS } from "./canvas-menu/canvas-menu-size-select";
import { Paper } from "./canvas-paper.types";
import { CanvasPaper } from "./canvas-paper";
import { useComponentEditStore } from "@stores";
import { CanvasMenu } from "./canvas-menu/";

export const Canvas = () => {
  const aspectRatioRef = useRef<HTMLDivElement>(null);
  const [paperSize, setPaperSize] = useState<Paper>("A4");

  const component = useComponentEditStore((state) => state.component);
  const selectComponent = useComponentEditStore(
    (state) => state.selectComponent,
  );
  const selectedDimension =
    PAPER_PRESETS.find((preset) => preset.label === paperSize)?.dimension ??
    210 / 297;

  const handleOutsideClick = () => {
    // console.log("canvas click");
    if (component) selectComponent(null);
  };
  return (
    <Container
      align="center"
      className="bg-zinc-200 w-full h-full pr-45 relative pt-20"
      onClick={handleOutsideClick}
    >
      <CanvasMenu
        paperSize={paperSize}
        setPaperSize={setPaperSize}
        aspectRatioRef={aspectRatioRef}
      />

      <div
        ref={aspectRatioRef}
        className="flex flex-col items-center justify-center"
      >
        <CanvasPaper selectedDimension={selectedDimension} />
      </div>
    </Container>
  );
};
