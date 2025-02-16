import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Container } from "@shared/components/container";
import { useState } from "react";
import { CanvasDropdown } from "./canvas-dropdown";
import { PAPER_PRESETS } from "../constants/canvas-dropdown";

export const Canvas = () => {
  const [paperSize, setPaperSize] = useState("A4");

  const selectedDimension = PAPER_PRESETS.find(
    (preset) => preset.label === paperSize,
  )?.dimension;

  return (
    <Container align="center" className="bg-zinc-200 w-full h-full">
      <CanvasDropdown paperSize={paperSize} setPaperSize={setPaperSize} />
      <div className="scroll-m-20 w-lg h-full flex items-center">
        <AspectRatio
          ratio={selectedDimension}
          className="bg-white shadow-xl"
        ></AspectRatio>
      </div>
    </Container>
  );
};
