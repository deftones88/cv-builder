import { AspectRatio } from "@shared/components/shadcnui";
import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import { cn } from "@shared/lib/utils";
import { useComponentsStore } from "@stores";
import { CanvasComponentWrapper } from "./canvas-component-wrapper";

type PaperProps = {
  selectedDimension: number;
};

export const CanvasPaper = ({ selectedDimension }: PaperProps) => {
  const droppable = useDroppable({
    id: "canvas-paper-drop-area",
    data: {
      isPaperDropArea: true,
    },
  });

  const components = useComponentsStore((state) => state.components);
  const addComponent = useComponentsStore((state) => state.addComponent);

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;
      if (!active?.data?.current || !over) return;

      const isComponentBtnElement = active.data.current.isComponentBtnElement;
      if (isComponentBtnElement) {
        const { type, props } = active.data.current;
        const newElement = {
          type,
          settings: props,
          position: {
            x: over.rect.left - over.rect.width / 2,
            y: over.rect.top - over.rect.height / 2,
          },
        };
        addComponent(newElement);
      }
    },
  });

  return (
    <div className="scroll-m-20 w-lg h-full flex items-center">
      <AspectRatio
        ratio={selectedDimension}
        className={cn(
          "bg-white shadow-xl flex flex-col flex-grow items-center justify-start flex-1",
          droppable.isOver && "ring-1 ring-primary/20",
        )}
        ref={droppable.setNodeRef}
      >
        {!components.length && !droppable.isOver && (
          <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold">
            여기로 드래그 하세요
          </p>
        )}
        {droppable.isOver && (
          <div className="p-4 w-full">
            <div className="h-[120px] rounded-md bg-gray-500/20"></div>
          </div>
        )}
        {components.length > 0 &&
          components.map((component) => (
            <CanvasComponentWrapper component={component} key={component.id} />
          ))}
      </AspectRatio>
    </div>
  );
};
