import { AspectRatio } from "@shared/components/shadcnui";
import { cn } from "@shared/lib/utils";
import { CanvasComponentWrapper } from "./canvas-component-wrapper";
import { Paper } from "./canvas-paper.types";
import { PAPER_PRESETS } from "./canvas-menu";
import { useCanvasPaper } from "./canvas-paper.hooks";

type PaperProps = {
  paperSize: Paper;
  pageIndex: number;
};

export const CanvasPaper = ({ paperSize, pageIndex }: PaperProps) => {
  const selectedDimension =
    PAPER_PRESETS.find((preset) => preset.label === paperSize)?.dimension ??
    210 / 297;

  const { droppable, components } = useCanvasPaper({ pageIndex });

  return (
    <div className="w-lg h-full flex items-center">
      <AspectRatio
        ref={droppable.setNodeRef}
        ratio={selectedDimension}
        className={cn(
          "bg-white shadow-xl flex flex-col flex-grow items-center justify-start flex-1 py-5 px-8",
          droppable.isOver && "ring-inset ring-1 ring-primary/20",
        )}
      >
        {!components.length && !droppable.isOver && (
          <p
            className="text-3xl text-muted-foreground flex flex-grow items-center font-bold"
            data-html2canvas-ignore
          >
            여기로 드래그 하세요
          </p>
        )}
        {components.length > 0 &&
          components.map((component) => (
            <CanvasComponentWrapper component={component} key={component.id} />
          ))}
        {droppable.isOver && (
          <div className="h-[120px] w-full rounded-md bg-gray-500/20" />
        )}
      </AspectRatio>
    </div>
  );
};
