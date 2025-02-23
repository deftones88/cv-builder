import { Container } from "@shared/components/container";
import { useState } from "react";
import { CanvasDropdown, PAPER_PRESETS } from "./canvas-dropdown";
import { Paper } from "./canvas-paper.types";
import { CanvasPaper } from "./canvas-paper";
import { useComponentsStore } from "@stores";

export const Canvas = () => {
  const [paperSize, setPaperSize] = useState<Paper>("A4");

  const component = useComponentsStore((state) => state.component);
  const selectComponent = useComponentsStore((state) => state.selectComponent);

  const selectedDimension =
    PAPER_PRESETS.find((preset) => preset.label === paperSize)?.dimension ??
    210 / 297;

  return (
    <Container
      align="center"
      className="bg-zinc-200 w-full h-full pr-45"
      onClick={() => {
        if (component) selectComponent(null);
      }}
    >
      <CanvasDropdown paperSize={paperSize} setPaperSize={setPaperSize} />
      <CanvasPaper selectedDimension={selectedDimension} />
    </Container>
  );
};
