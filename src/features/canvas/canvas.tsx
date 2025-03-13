import { Container } from "@shared/components/container";
import { useRef, useState } from "react";
import { CanvasDropdown, PAPER_PRESETS } from "./canvas-dropdown";
import { Paper } from "./canvas-paper.types";
import { CanvasPaper } from "./canvas-paper";
import { useComponentsStore } from "@stores";
import { ExportToPDF } from "@features/export-to-pdf";

export const Canvas = () => {
  const aspectRatioRef = useRef<HTMLDivElement>(null);
  const [paperSize, setPaperSize] = useState<Paper>("A4");

  const component = useComponentsStore((state) => state.component);
  const selectComponent = useComponentsStore((state) => state.selectComponent);
  const selectedDimension =
    PAPER_PRESETS.find((preset) => preset.label === paperSize)?.dimension ??
    210 / 297;

  const handleOutsideClick = () => {
    console.log("canvas click");
    if (component) selectComponent(null);
  };
  return (
    <Container
      align="center"
      className="bg-zinc-200 w-full h-full pr-45 relative pt-20"
      onClick={handleOutsideClick}
    >
      <div className="absolute top-4 flex">
        <CanvasDropdown paperSize={paperSize} setPaperSize={setPaperSize} />
        <ExportToPDF aspectRatioRef={aspectRatioRef} />
      </div>

      <div
        ref={aspectRatioRef}
        className="flex flex-col items-center justify-center"
      >
        <CanvasPaper selectedDimension={selectedDimension} />
      </div>
    </Container>
  );
};
