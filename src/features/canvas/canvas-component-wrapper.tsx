import { useDraggable, useDroppable } from "@dnd-kit/core";
import { Button } from "@shared/components/shadcnui";
import { SelectionElements } from "@shared/constants";
import { cn } from "@shared/lib/utils";
import { ComponentElementInstance } from "@shared/types";
import { useComponentEditStore, useComponentsStore } from "@stores";
import { XIcon } from "lucide-react";
import { memo, useState } from "react";

type CanvasComponentWrapperProps = {
  component: ComponentElementInstance;
};

export const CanvasComponentWrapper = memo(
  ({ component }: CanvasComponentWrapperProps) => {
    const selectComponent = useComponentEditStore(
      (state) => state.selectComponent,
    );
    const removeComponent = useComponentsStore(
      (state) => state.removeComponent,
    );
    const [mouseIsOver, setMouseIsOver] = useState(false);
    const { settings: props, id, type } = component;
    const ComponentElement = SelectionElements[type].component;

    const topHalf = useDroppable({
      id: id + "-top",
      data: {
        type,
        elementId: id,
        isTopHalfElement: true,
      },
    });
    const bottomHalf = useDroppable({
      id: id + "-bottom",
      data: {
        type,
        elementId: id,
        isBottomHalfElement: true,
      },
    });

    const draggable = useDraggable({
      id: id + "-drag-handler",
      data: {
        type,
        elementId: id,
        isComponentElement: true,
      },
    });

    if (draggable.isDragging) return null;

    return (
      <div
        ref={draggable.setNodeRef}
        {...draggable.listeners}
        {...draggable.attributes}
        className="relative w-full min-h-[10px] hover:cursor-pointer rounded-md border-none hover:border-none"
        onMouseEnter={() => {
          setMouseIsOver(true);
        }}
        onMouseLeave={() => {
          setMouseIsOver(false);
        }}
        onClick={(event) => {
          event.stopPropagation();
          selectComponent(id);
        }}
      >
        <div
          ref={topHalf.setNodeRef}
          className="absolute w-full h-1/2 rounded-t-md"
        />
        <div
          ref={bottomHalf.setNodeRef}
          className="absolute w-full bottom-0 h-1/2 rounded-b-sm"
        />
        {mouseIsOver && (
          <>
            <div className="absolute -right-2 h-full z-50">
              <Button
                variant="ghost"
                className="flex justify-center h-full px-1! bg-zinc-900 hover:bg-zinc-700 rounded-none rounded-r-sm cursor-pointer"
                onClick={() => {
                  removeComponent(id);
                }}
              >
                <XIcon size={6} className="text-white" />
              </Button>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="text-xl font-bold text-black">
                클릭하거나 드래그하세요
              </div>
            </div>
          </>
        )}
        {topHalf.isOver && (
          <div className="absolute top-0 w-full rounded-t-md h-[7px] bg-zinc-500 z-50" />
        )}
        {bottomHalf.isOver && (
          <div className="absolute bottom-0 w-full rounded-b-md h-[7px] bg-zinc-500 z-50" />
        )}
        <div
          className={cn(
            "w-full pointer-event-none opacity-100 py-1",
            mouseIsOver &&
              "py-4 min-h-[50px] opacity-20 bg-zinc-200 rounded-md",
          )}
        >
          <ComponentElement {...props} />
        </div>
      </div>
    );
  },
);
