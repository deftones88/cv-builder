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
  const removeComponent = useComponentsStore((state) => state.removeComponent);

  console.log("canvas-paper components", components);
  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;
      if (!active?.data?.current || !over?.data?.current) return;

      const { type, props, settingsTitle } = active.data.current;

      const newElement = {
        type,
        settings: props,
        title: settingsTitle,
        // position: {
        //   x: over.rect.left - over.rect.width / 2,
        //   y: over.rect.top - over.rect.height / 2,
        // },
      };

      const isComponentBtnElement = active.data.current.isComponentBtnElement;

      // dropping btn over paper area
      const isDroppingOverPaperArea = over.data.current.isPaperDropArea;
      if (isComponentBtnElement && isDroppingOverPaperArea) {
        addComponent(components.length, newElement);
        return;
      }

      // dropping btn over other elements
      const isDroppingOverElementTopHalf = over.data.current.isTopHalfElement;
      const isDroppingOverElementBottomHalf =
        over.data.current.isBottomHalfElement;
      const isDroppingOverElement =
        isDroppingOverElementBottomHalf || isDroppingOverElementTopHalf;

      if (isComponentBtnElement && isDroppingOverElement) {
        const overElementIndex = components.findIndex(
          (el) => el.id === over.data.current?.elementId,
        );
        if (overElementIndex === -1) {
          throw new Error("element not found: " + over.data);
        }

        const indexForNewElement =
          overElementIndex + Number(isDroppingOverElementBottomHalf);
        addComponent(indexForNewElement, newElement);
        return;
      }

      // dragging existing elements over another
      const isDraggingExisting: boolean =
        isDroppingOverElement && !!active.data.current.isComponentElement;
      if (isDraggingExisting) {
        const activeElementIndex = components.findIndex(
          (el) => el.id === active.data.current?.elementId,
        );
        const overElementIndex = components.findIndex(
          (el) => el.id === over.data.current?.elementId,
        );
        if (activeElementIndex === -1 || overElementIndex === -1) {
          throw new Error(
            "element not found\n- active : " +
              active.data +
              "\n- over : " +
              over.data,
          );
        }

        const activeComponent = { ...components[activeElementIndex] };
        removeComponent(activeComponent.id);

        const indexForNewElement =
          overElementIndex + Number(isDroppingOverElementBottomHalf);
        addComponent(indexForNewElement, activeComponent);
        return;
      }
    },
  });

  return (
    <div className="scroll-m-20 w-lg h-full flex items-center">
      <AspectRatio
        ref={droppable.setNodeRef}
        ratio={selectedDimension}
        className={cn(
          "bg-white shadow-xl flex flex-col flex-grow items-center justify-start flex-1 py-5 px-8",
          droppable.isOver && "ring-1 ring-primary/20",
        )}
      >
        {!components.length && !droppable.isOver && (
          <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold">
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
